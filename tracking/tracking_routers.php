<?php
if( ! defined('ABSPATH') ) die( 'No direct access!' );

if( !class_exists('TrackingRouters') ) {
	class TrackingRouters{
		/**
		 * @var string $namespace
		 */
		private $namespace;
		/**
		 * @var string $auth_route
		 */
		private $tracking_route;

		/**
		 * @var string $tracking_table
		 */
		public $tracking_table;

		/**
		 * TrackingRouters constructor.
		 */
		public function __construct() {
			$this->tracking_table = get_tracking_table_name();
			$this->namespace  = '/iexperto';
			$this->tracking_route = '/tracking';
		}

		// Register our routes.
		public function register_routes() {
			$this->route( $this->tracking_route, 'tracking_controller' );
		}

		/**
		 * Create a route.
		 * @param string $route
		 * @param string $callback
		 * @param string $method
		 */
		private function route( $route, $callback, $method = 'POST'){
			register_rest_route( $this->namespace,  $route, array(
				'methods'             => $method,
				'callback'            => array(
					$this,
					$callback
				)
			) );
		}

		/**
		 * Get the request data and handle them.
		 *
		 * @param WP_REST_Request $request Current request.
		 *
		 * @return mixed
		 */
		public function tracking_controller( $request ) {

			$data = $request->get_params();
			$token = isset($data['token']) ? sanitize_text_field( $data['token'] ) : '';
			$session_id = isset($data['session_id']) ? sanitize_text_field( $data['session_id'] ) : '';
			$start = isset($data['start']) ? sanitize_text_field( $data['start'] ) : '';
			$last = isset($data['last']) ? sanitize_text_field( $data['last'] ) : '';
			$gallery = 'yes' == @$data['gallery'] ? '1' : '0';
			$path = isset($data['path']) ? sanitize_text_field( $data['path'] ) : '';

			if( empty( $token ) || empty( $session_id ) || empty( $start ) || empty( $last ) ) {
				return rest_ensure_response( [
					'status' => false,
					'message' => __( 'Provide valid data to track the analytic.', 'amz' )
				] );
			}

			$track = [
				'token' => $token,
				'session_id' => $session_id,
				'is_gallery' => $gallery,
				'path' => $path,
				'start_time' => $start,
				'last_activity' => $last
			];

			$is_exist = $this->tracking_exist( $track );

			if( $is_exist ) {
				// Update tracking
				$status = $this->update_tracking( $track );
			} else {
				// store tracking
				$status = $this->store_tracking( $track );
			}

			if( $status ) {
				return rest_ensure_response( [
					'status' => true,
					'message' => sprintf("Tracking data %s!", $is_exist ? 'updated' : 'stored')
				] );
			}

		}

		/**
		 * Store the tracking.
		 *
		 * @param array $track
		 *
		 * @return bool
		 */
		private function store_tracking( $track ) {
			$default = [
				'token' => '',
				'session_id' => '',
				'is_gallery' => '0',
				'path' => '',
				'start_time' => 0,
				'last_activity' => 0
			];
			$track = wp_parse_args( $track, $default );

			global $wpdb;
			$table_name = $this->tracking_table;

			$status = $wpdb->insert( $table_name, $track, ['%d', '%s', '%s', '%s', '%d', '%d'] );
			return false !== $status;
		}

		/**
		 * Update existing tracking.
		 *
		 * @param array $track
		 *
		 * @return bool
		 */
		private function update_tracking( $track ){
			global $wpdb;
			$table_name = $this->tracking_table;

			$status = $wpdb->update(
				$table_name,
				[
					'last_activity' => absint( $track['last_activity'] )
				],
				[
					'token' => $track['token'],
					'session_id' => $track['session_id'],
					'start_time' => $track['start_time']
				],
				[ '%d' ],
				[ '%d', '%s', '%d' ]
			);

			return false !== $status;
		}

		/**
		 * Check if the Tracking already exists.
		 *
		 * @param array $track
		 *
		 * @return bool
		 */
		private function tracking_exist( $track ) {
			global $wpdb;
			$table_name = $this->tracking_table;
			$sql = "SELECT * FROM {$table_name}
				WHERE `token` = %d 
				AND `session_id` = %s
				AND `start_time` = %d;";
			$query = $wpdb->prepare( $sql, $track['token'], $track['session_id'], $track['start_time'] );
			$results = $wpdb->get_results($query);
			return count( $results ) > 0;
		}

	}

	// Function to register our new routes from the controller.
	function sl_register_tracking_rest_routes() {
		$controller = new TrackingRouters();
		$controller->register_routes();
	}
	add_action( 'rest_api_init', 'sl_register_tracking_rest_routes' );

}


