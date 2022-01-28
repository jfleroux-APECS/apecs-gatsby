<?php
/*
Plugin Name: Deploy plugin
Description: A deploy plugin to rerun github actions
Author: Christina Hastenrath
Version: 0.1
*/

add_action('admin_menu', 'test_plugin_setup_menu');

function test_plugin_setup_menu(){
    add_menu_page( 'Deploy Plugin Page', 'Deploy Plugin', 'edit_posts', 'deploy-plugin', 'test_init' );
}

function test_init(){
    ?>
    <h1>ReRun the Blog</h1>

    <h2>Publish to Production</h2>
    <form method="post">
        <input type="submit" class="button" name="button" value="Production"/>
    </form>
    <p>You can check the status of the publishing here <span><a href="https://github.com/edieval/apecs-gatsby/actions">Github Actions</a></span></p>

    <?php
}

if(isset($_POST['button'])) {
    echo "............................................The Production Site is now rerunning and should be updated within a few minutes";
    $endpoint = 'https://api.github.com/repos/edieval/apecs-gatsby/actions/workflows/13975243/dispatches';

    $body = [
        'ref' => 'master',
    ];

    $body = wp_json_encode( $body );

    $options = [
        'body'          => $body,
        'headers'       => [
            'Accept' => 'Accept: application/vnd.github.v3+json',
            'Authorization' => 'Bearer my_token'
        ],
        'httpversion' => '1.0',
        'sslverify' => false,
        'data_format' => 'body',
    ];

    wp_remote_post( $endpoint, $options );
}

?>