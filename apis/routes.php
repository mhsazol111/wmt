<?php
if( ! defined('ABSPATH') ) die('No direct access!');


if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access not allowed.' );
}

class AMZ_Router_Controller {
	/**
	 * @var string $namespace
	 */
	private $namespace;
	/**
	 * @var string $auth_route
	 */
	private $auth_route;

	/**
	 * @var string $auth_check
	 */
	private $auth_check;

	public function __construct() {
		$this->namespace  = '/amz';
		$this->auth_route = '/auth';
		$this->auth_check = '/auth-check';
	}

	// Register our routes.
	public function register_routes() {
		register_rest_route( $this->namespace,  $this->auth_route, array(
			'methods'             => 'POST',
			'callback'            => array(
				$this,
				'auth_controller'
			)
		) );

		register_rest_route( $this->namespace,  $this->auth_check, array(
			'methods'             => 'POST',
			'callback'            => array(
				$this,
				'auth_check_controller'
			)
		) );
	}

	/**
	 * Check permissions for the posts.
	 *
	 * @param WP_REST_Request $request Current request.
	 *
	 * @return mixed
	 */
	public function lead_manage_permissions_check( $request ) {
		// return true;
		$data = $request->get_param( 'fm_token' );
		// $data = $request->get_headers();
		$secret = '&x8exQW092qwTxBn+Ytxe8923#';
		// $companyId = '5daddc137d7b223a5a3baad6';
//		if( $secret !== $data ) {
//			return new WP_Error( 'rest_forbidden', esc_html__( 'Please check the information and request again!' ), array( 'status' => $this->authorization_status_code() ) );
//		}
		return true;
	}

	/**
	 * Get the request data and handle them.
	 *
	 * @param WP_REST_Request $request Current request.
	 *
	 * @return mixed
	 */
	public function auth_controller( $request ) {

		// $headers     = $request->get_headers();
		$data = $request->get_params();
		$pass = sanitize_text_field( $data['pass'] );
		if( empty( $pass ) ) {
			return rest_ensure_response( [
				'status' => false,
				'message' => __( 'Invalid access code provided.', 'amz' )
			] );
		}

		// Print to debug
		/*ob_start();
		print_r( $pass );
		$ms = ob_get_clean();
		file_put_contents(__DIR__ . '/debug.log', $ms);*/

		$token = get_posts([
			'posts_per_page' => 1,
			'post_status' => 'publish',
			'post_type' => 'pass_token',
			'meta_key' => 'token',
			'meta_value' => $pass
		]);

		if( count( $token ) ) {
			$found_token = $token[0];
			//$generate_session = wp_generate_uuid4();
			// Generate a new session token
			// update_post_meta( $found_token->ID, '_session_token', $generate_session );
			// Count number of login
			$get_history = get_post_meta( $found_token->ID, '_login_count', true);
			$new_count = empty( $get_history ) ? 1 : $get_history + 1;
			if( $new_count > 10 ) { // limit to 10 times
				// Send response
				return rest_ensure_response( [
					'status' => false,
					'message' => __( 'Sorry! Your token is limited to use 10 times only! Please try with another token.', 'amz' )
				] );
			}
			update_post_meta( $found_token->ID, '_login_count', $new_count );
			$token_txt = get_post_meta( $found_token->ID, 'token', true);
			$visitor_id = $token_txt . wp_generate_uuid4() . time();
			// Send response
			return rest_ensure_response( [
				'status' => true,
				'message' => __( 'Logged in successfully, please wait while we redirect you to the premier page!', 'amz' ),
				'token' => $found_token->ID,
				'visitor' => $visitor_id
			] );
		} else {
			return rest_ensure_response( [
				'status' => false,
				'message' => __( 'Invalid access code provided, please try again with correct access code.', 'amz' )
			] );
		}
	}

	public function auth_check_controller( $request ) {
		$data = $request->get_params();
		$pass = sanitize_text_field( $data['token'] );
		if( empty( $pass ) ) {
			return rest_ensure_response( [
				'status' => false,
				'message' => __( 'Invalid access code provided.', 'amz' )
			] );
		}

		// $_token = explode('|_|', $pass );
		$post_id = $pass; //isset( $_token[0] ) ? absint( $_token[0] ) : '';
		// $session_token = isset( $_token[1] ) ? $_token[1] : '';
		if( ! empty( $post_id ) ) {
			// $existing_token = get_post_meta( $post_id, '_session_token', true );
			// if( $session_token === $existing_token ) {
				return rest_ensure_response( [
					'status' => true,
					'message' => __( 'Success!', 'amz' )
				] );
			// }
		}
		return rest_ensure_response( [
			'status' => false,
			'message' => __( 'Invalid request, please try again.', 'amz' )
		] );
	}

	// Sets up the proper HTTP status code for authorization.
	public function authorization_status_code() {
		$status = 403;

		return $status;
	}
}

// Function to register our new routes from the controller.
function fm_register_lead_manager_rest_routes() {
	$controller = new AMZ_Router_Controller();
	$controller->register_routes();
}

add_action( 'rest_api_init', 'fm_register_lead_manager_rest_routes' );