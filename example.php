<?php

/*
 Controller name: Example
 Controller description: Custom example controller
 */

final class JSON_API_Example_Controller {

  public function info() {
    return array(
      'version' => '1.0'
    );
  }

  public function get() {

    $object = new stdClass();
    $object->name = "Object";
    $object->description = "A JSON encodable object.";

    return array(
      "message" => "Hello World!",
      "fruit" => array( "banana", "apple", "pear", "orange" ),
      "object" => $object
    );
  }

}
