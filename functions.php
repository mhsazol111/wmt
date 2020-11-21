<?php
if ( ! function_exists( 'amz_prime_setup' ) ):
    function amz_prime_setup() {

        add_theme_support( 'title-tag' );

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support( 'post-thumbnails' );

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus( array(
            'menu-1' => esc_html__( 'Primary', 'avrios' ),
        ) );

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support( 'custom-logo', array(
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
        ) );
    }
endif;
add_action( 'after_setup_theme', 'amz_prime_setup' );

// Enqueue Theme JS w React Dependency
add_action( 'wp_enqueue_scripts', 'amz_enqueue_theme_scripts' );
function amz_enqueue_theme_scripts() {

    $version = '1.0.0'; //time();

    wp_enqueue_style( 'address-gautreaux', '//use.typekit.net/nhw4vnu.css', null, '1.0', 'all' );
    wp_enqueue_style( 'address-sans', '//use.typekit.net/wsy0wvw.css', null, '1.0', 'all' );

    wp_enqueue_style( 'child-style',
        get_stylesheet_uri(), '', $version
    );

    wp_enqueue_script( 'amz-front', get_stylesheet_directory_uri() . '/build/index.js', ['wp-element'], $version, true );

    // Get the App settings
    $app_settings = pods('app_settings');
    $gate_open_time = strtotime( $app_settings->field('gate_open_time') );
    $movie_start = strtotime( $app_settings->field('movie_start_time') );
    $second_show_gate_open = strtotime( $app_settings->field('second_show_gate_open') );
    $second_movie_start_time = strtotime( $app_settings->field('second_movie_start_time') );
    $gate_close = strtotime( $app_settings->field('gate_close') );
    $video_id = $app_settings->field('video_id');
    wp_localize_script( 'amz-front', 'amzData', array(
        'site_url'  => get_site_url(),
        'theme_url' => get_stylesheet_directory_uri(),
        'csrf'      => wp_create_nonce( 'wp_rest' ),
        'gate_open_time' => $gate_open_time * 1000, // milliseconds
        'movie_start' => $movie_start * 1000, // milliseconds
        'redirect_after' => $app_settings->field('redirect_to_movie'),
        'second_show_gate_open' => $second_show_gate_open * 1000, // milliseconds
        'second_movie_start_time' => $second_movie_start_time * 1000, // milliseconds
        'gate_close' => $gate_close * 1000, // milliseconds,
        'video_id' => $video_id,
    ) );

    //wp_enqueue_script('jquery');
    wp_enqueue_script( 'owl-js', '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', array( 'jquery' ), '2.3.4', true );
    wp_enqueue_style( 'owl-css', '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css', null, '2.3.4', 'all' );
    wp_enqueue_script( 'vide_js', '//cdnjs.cloudflare.com/ajax/libs/vide/0.5.1/jquery.vide.min.js', ['jquery'], '', true );
    wp_enqueue_script( 'screen_full', '//cdnjs.cloudflare.com/ajax/libs/screenfull.js/5.0.2/screenfull.min.js', ['jquery'], '5.0.2', true );
    // Main Script
    wp_enqueue_script( 'amz-main', get_stylesheet_directory_uri() . '/assets/main.js', ['jquery', 'vide_js'], $version, true );

    wp_localize_script( 'amz-main', 'amz', array(
        'site_url'  => get_site_url(),
        'theme_url' => get_stylesheet_directory_uri(),
    ) );
}


function amz_add_header_script() {
    ?>
    <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101282292);</script>
    <script async src="//static.getclicky.com/js"></script>
<?php
}
add_action('wp_head', 'amz_add_header_script', 20);

// Include required files
require_once __DIR__ . '/apis/routes.php';
require_once __DIR__ . '/tracking/tracking.php';