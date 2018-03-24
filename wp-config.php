<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'owl');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'w=bf%h>S~(*VDzC2%*!QN^/}?PZzo.B}DdNY~h,0g.GU39&P**=brAu`V31:GGnE');
define('SECURE_AUTH_KEY',  'N}+x5h.(b rR}Ff45}6&,?pH5.}QTljXE~k_m.CRV16__#/9T7{z^[(Eb0_e5O!?');
define('LOGGED_IN_KEY',    '`Y8e.hhP:^c9~1,!5(Ye~^Kmr2sYP<hXBjGdIB^hZ2l>xf#Z)n_fvSmn,6Cw.c)-');
define('NONCE_KEY',        '</>mk&l<[-3{gWg)bpcdl1p1`O;lE.}o}hafBGHs5Q|K<e~REk%h)]jbdMVr30|>');
define('AUTH_SALT',        'sIdg;y*h@lqW.gz*T>A$800*)Cd9k^(qA_0&!MyJ%FUeQl^FE6RYSDBRkG:-]x8f');
define('SECURE_AUTH_SALT', '&` -@fezW6tt(z;(5&^IeH6yJBNIP6wn/t(G^DXlm0<3wzlAI`gAkNA`VUWqq*^{');
define('LOGGED_IN_SALT',   'bOacO_pqEGYXeZ,1j:+zLpN{c zGezB)K31(f[IXP[XW]-X]yT%7hkZHe$STzUlD');
define('NONCE_SALT',       'nW;TPZ2H@XQvLvy:) GETj/*ja`4M-00-#[LO^Dt%grVo{_ry{blXdKta8rvV#w6');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
