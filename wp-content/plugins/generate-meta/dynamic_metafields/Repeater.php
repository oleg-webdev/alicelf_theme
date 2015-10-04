<?php

/**
 * Class Repeater
 */
class Repeater extends GenerateMeta {

	public function __construct($id, $title, $screen = null, $callback_args = null)
	{
		parent::__construct($id, $title, $screen = null, $callback_args = null);
	}

	public function metaInvokeCallback( $post )
	{
		$value         = null;
		$out           = "";
		$template      = "";
		$sections = null;
		$loop_type = "single";

		if ( get_post_meta( $post->ID, $this->id, true ) ) {
			$value = get_post_meta( $post->ID, $this->id, true );
			$sections = unserialize($value);
			$loop_type = "multiple";
		}
		?>

		<div class='GenerateMeta generate-repeater-metabox' data-post-id="<?php echo $post->ID ?>">
			<textarea value="<?php echo $value ?>" id="<?php echo $this->id ?>-identifier" name="<?php echo $this->id ?>" data-handler="data" class="hidden-meta-repeater-container"><?php echo $value ?></textarea>
			<div class="data-page-repeater">
				<?php
				// Loop for template

				$template .="<section data-sort=''><div data-section-title=''></div>";
				$template .="<input type='text' data-section-name='section-name' placeholder='Enter Name of your section'>";
				foreach ( $this->options as $single_field ) {
					switch($single_field['type']) {
						case "textarea" :
							$template .= "<p>{$single_field['name']}</p>";
							$template .="<textarea class='input-class-{$single_field['name']}' data-type='textarea' data-input='{$single_field['name']}'></textarea>";
							break;
						case "flex-field" :
							$template .="<p>{$single_field['name']}</p>";
							$template .="<input data-flex='{$single_field['type']}' value='' class='input-class-{$single_field['name']}' type='text' data-type='text' data-input='{$single_field['name']}'>";
							break;
						default :
							$template .="<p>{$single_field['name']}</p>";
							$template .="<input value='' class='input-class-{$single_field['name']}' type='text' data-type='text' data-input='{$single_field['name']}'>";
					}
				}
				$template .="<button data-destroy='destroy' class='button-default'>Remove section</button></section>";
				$template.="</section>";

				// Loop for non existing data
				if($loop_type === 'single') {
					$out .="<section data-sort='1'><div data-section-title=''></div>";
					$out .="<input type='text' data-section-name='section-name' placeholder='Enter Name of your section'>";
					foreach ( $this->options as $single_field ) {

						switch($single_field['type']) {
							case "textarea" :
								$out .= "<p>{$single_field['name']}</p>";
								$out .="<textarea class='input-class-{$single_field['name']}' data-type='textarea' data-input='{$single_field['name']}'></textarea>";
								break;
							case "flex-field" :
								$out .= "<p>{$single_field['name']}</p>";
								$out .="<input data-flex='{$single_field['type']}' value='' class='input-class-{$single_field['name']}' type='text' data-type='text' data-input='{$single_field['name']}'>";
								break;
							default :
								$out .= "<p>{$single_field['name']}</p>";
								$out .="<input value='' class='input-class-{$single_field['name']}' type='text' data-type='text' data-input='{$single_field['name']}'>";
						}
					}
					$out .="<button data-destroy='destroy' class='button-default'>Remove section</button></section>";
					$out .="</section>";
				} else {
					echo "<pre>";
					print_r($sections);
					echo "</pre>";
				}

				echo $out;
				?>
			</div>
			<button class="button-default" data-add-section="add">Add section</button>
			<input type="hidden" data-template="<?php echo $template ?>"/>
			<p><button data-repeater-submit="subm" class="button-primary">Save Repeater</button><small><?php echo $this->id ?></small></p>
		</div>
		<?php
	}
}

$section_template = array(
	array(
		'type' => 'text',
		'name' => 'title',
		'value' => '',
	),
	array(
		'type' => 'textarea',
		'name' => 'description',
		'value' => '',
	)
);

$dynamic_metabox = new Repeater( 'pages_repeater_meta', 'Page Accordion', 'page' );
$dynamic_metabox->run( 'repeater', null, 'high', $section_template );
$dynamic_metabox->saveMetadata();