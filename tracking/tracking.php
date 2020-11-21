<?php
if( ! defined('ABSPATH') ) die( 'No direct access!' );

function get_tracking_table_name(){
	global $wpdb;
	return $wpdb->prefix . 'ie_tracking_analytics';
}
/**
 * Create Tracking table
 * @return boolean
 */
function sl_create_tracking_analytic_db() {
	if( 1 == get_option('ie_tracking_analytics_db_created') ) {
		return false;
	}
    global $wpdb;
    $table_name = get_tracking_table_name();
    $charset_collate = $wpdb->get_charset_collate();

    // id, token, session_id, is_gallery, path, start_time, last_activity
    $sql = "CREATE TABLE $table_name (
      id mediumint(11) NOT NULL AUTO_INCREMENT,
      token varchar(10) NOT NULL,
      session_id varchar(256) NOT NULL,
      is_gallery enum('0', '1') DEFAULT '0' NOT NULL,
      path varchar(256) NULL,
      start_time varchar(32) NOT NULL,
      last_activity varchar(32) NOT NULL,
      PRIMARY KEY  (id)
    ) $charset_collate;";

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $sql );
    update_option('ie_tracking_analytics_db_created', 1);
    return true;
}
add_action( 'admin_init', 'sl_create_tracking_analytic_db' );

// Load Routers
require_once __DIR__ . '/tracking-table.php';
require_once __DIR__ . '/tracking_routers.php';