<?php
/**
 * Template Name: Book Page
 * Template Post Type: post, page
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 */
wp_enqueue_script('simple_grid_script', get_template_directory_uri() . "/simple-grid/jquery.xfilterlist.js", array('jquery'), true);
wp_enqueue_script('simple_grid_js', get_template_directory_uri() . "/simple-grid/simple-grid.js", array('jquery'), true);
wp_enqueue_style('simple_grid_style', get_template_directory_uri() . "/simple-grid/simple-grid.css");
get_header();
?>
    <style>
        #sortlist {
            display: none;
        }
    </style>
    <script>
        jQuery(window).on('load', function() {
            jQuery("#nav-book ul li:nth-child(2)").trigger("click");
            jQuery("#nav-book ul li:nth-child(1)").trigger("click");
            jQuery("#sortlist").css('display', 'block');
        })
    </script>

<main id="main-content" class="container-fluid">
<div class="container" role="main">
            <div class="col-9">
                <div id="book-container" class="content-area">
                    <?php
                            $args = array(
                                    'posts_per_page' => -1,
                                        'orderby' => 'post_date',
                                        'order' => 'DESC',
                                        'post_type' => 'book_item',
                                        'offset' => 1,
                                        'post_status' => 'publish'
                                );
                                $query = new WP_Query($args);
                     ?>
                    <!--display book-->
                    <div class="site-content">
                            <div id="book-title">
                                test
                            </div>
                            <nav id="filters">
                                <ul id="nav-book">
                                    <li id="book-name-filter"> FILTER: </li>
                                    <li id="book-sort-btn filters">
                                        <a href="javascript:;" data-filter="all">All</a>
                                    </li>
                            <?php
                            $book_category = get_terms( array(
                                'taxonomy' => 'book_category',
                                'hide_empty' => true,
                            ) );
                            foreach ( $book_category as $category  ) {

                                        // Sanitize the term, since we will be displaying it.
                                        $category = sanitize_term( $category, 'book_category' );

                                        // If there was an error, continue to the next term.
                                        if ( is_wp_error( $category ) ) {
                                            continue;
                                        }
                                        // We successfully got a link. Print it out.
                                        echo "<li id='book-sort-btn filters'><a href='javascript:;' data-filter='$category->name'>$category->name</a></li>";
                                    }
                            ?>
                                </ul>
                            </nav>
                        <ul id='sortlist'>
                        <?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();?>
                        <?php $book_cat = wp_get_post_terms(get_the_ID(), 'book_category'); ?>
                        <?php
                            $assigned_categories = array();
                            foreach( $book_cat as $cat) {
                                if ( ! empty( $book_cat ) && ! is_wp_error( $book_cat ) ){
                                $assigned_categories[] = $cat->name;
                            }}?>
                                <li data-filter='<?php echo implode(',', $assigned_categories); ?>'>
                                    <a href="<?php echo get_the_excerpt() ?>">
                                        <div class="row">
                                            <div class=“img-responsive " >
                                        <?php if (has_post_thumbnail()) {the_post_thumbnail('', 'medium');} ?>
                                            </div>
                                            <div class="col-md-12" id="book-name">
                                                <?php the_title() ?>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                        <?php endwhile; ?>
                        <?php endif; ?>
                        <?php wp_reset_query(); ?>
                    </ul>
                    </div><!-- #content -->
                </div><!-- #primary -->
            </div>
        </div>
    </div>
</main><!-- #main-content -->
<?php