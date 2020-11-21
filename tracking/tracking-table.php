<?php
if( ! defined( 'ABSPATH' ) ) die('No direct access');

if( ! class_exists( 'WP_List_Table' ) ) {
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}

class IE_Tracking_List_Table extends WP_List_Table {

    private $per_page;

	function __construct(){
		global $status, $page;

		parent::__construct( array(
			'singular'  => __( 'tracking', 'amz' ),
			'plural'    => __( 'tracking', 'amz' ),
			'ajax'      => false
		) );

		add_action( 'admin_head', array( &$this, 'admin_header' ) );

		$this->per_page = 20;
	}

	function get_tracking_data( $page = 1 ){
        $offset = $page < 2 ? 0 : ($page - 1) * $this->per_page;
        global $wpdb;
        $table_name = get_tracking_table_name();
        $sql = "SELECT * FROM {$table_name}
            ORDER BY id DESC 
            LIMIT {$this->per_page} OFFSET {$offset};
        ";
        return $wpdb->get_results( $sql );
    }

    function get_total_track_count() {
	    global $wpdb;
	    $table_name = get_tracking_table_name();
	    $sql = "SELECT count(*) as total FROM {$table_name}
            ORDER BY id DESC;
        ";
	    return $wpdb->get_var ( $sql );
    }

	function admin_header() {
		$page = ( isset($_GET['page'] ) ) ? esc_attr( $_GET['page'] ) : false;
		if( 'pods-settings-tracking-analytics' != $page )
			return;
		echo '<style type="text/css">';
		echo '.wp-list-table .column-id { width: 5%; }';
		echo '.wp-list-table .column-booktitle { width: 40%; }';
		echo '.wp-list-table .column-author { width: 35%; }';
		echo '.wp-list-table .column-isbn { width: 20%;}';
		echo '</style>';
	}

	function no_items() {
		_e( 'No tracking record found!.' );
	}

	function column_default( $item, $column_name ) {
		switch ( $column_name ) {
			case 'cb':
			    return $item->id;
			case 'token':
			    return sprintf("<strong>%s</strong><small>(%d)</small>",
					get_post_meta( $item->token, 'token', true ),
                    $item->id
                );
			case 'session_id':
				return $item->session_id;
			case 'is_gallery':
			    return 1 == $item->is_gallery ? 'Yes' : 'No';
			case 'path':
			    return '/' . $item->path;
			case 'duration':
                $start = $item->start_time;
                $end = $item->last_activity;
                $time_spent = floor( ( $end - $start ) / 1000);
                $mins = floor($time_spent / 60 );
                $seconds = floor( $time_spent % 60 );
                return $mins . 'm ' .$seconds . 's';
			default:
				// return print_r( $item, true ); //Show the whole array for troubleshooting purposes
		}
	}

	function get_columns(){
		$columns = array(
			'cb'         => '<input type="checkbox" />',
			'token'      => __( 'Token', 'amz' ),
			'duration'   => __( 'Duration', 'amz' ),
			'is_gallery' => __( 'Is Gallery', 'amz' ),
			'path'       => __( 'Navigation', 'amz' ),
			'session_id' => __( 'Session ID', 'amz' ),
		);

		return $columns;
	}

	function column_cb($item) {
		return sprintf(
			'<input type="checkbox" name="tracking[]" value="%s" />', $item->id
		);
	}

	function prepare_items() {
		$columns  = $this->get_columns();
		$hidden   = array();
		$sortable = $this->get_sortable_columns();
		$this->_column_headers = array( $columns, $hidden, $sortable );

		$current_page = $this->get_pagenum();

		$data = $this->get_tracking_data( $current_page );
		$total_items = $this->get_total_track_count();

		$this->set_pagination_args( array(
			'total_items' => $total_items,
			'per_page'    => $this->per_page
		) );
		$this->items = $data;
	}

} //class

function sl_show_tracking_analytics_data() {
	$tracking_list_table = new IE_Tracking_List_Table();
	ob_start(); ?>
	<div class="wrap">
		<h2>Tracking Analytics data</h2>
		<?php $tracking_list_table->prepare_items(); ?>
		<form method="post">
            <input type="hidden" name="page" value="pods-settings-tracking-analytics">
            <?php
             $tracking_list_table->display();
             ?>
        </form>
	</div>
	<?php
	echo ob_get_clean();
}
add_action( 'pods_admin_ui_custom_tracking-analytics', 'sl_show_tracking_analytics_data' );