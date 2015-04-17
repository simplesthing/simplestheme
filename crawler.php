<?
$request = $_GET['_escaped_fragment_'];
$jsonurl = "./api/get_posts/";
$json = file_get_contents($jsonurl);
$json_output = json_decode($json);

foreach ($json_output as $page)
{
    if ($page->slug == $request)
    {
        $title = $page->title;
        $desc = $page->description;
        $keywords = $page->tags;
        $image = $page->thumb;
        $url = "http://".$_SERVER['HTTP_HOST']."/".$request;
    }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title><?php echo $title;?></title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="title" content="<?php echo $title;?>" />
  <meta name="description" content="<?php echo $desc;?>">
  <meta name="keywords" content="<?php echo $keywords;?>" />

  <meta property="og:url" content="<?php echo $url; ?>" />
  <meta property="og:site_name" content="My Site" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="<?php echo $title;?>" />
  <meta property="og:image" content="<?php echo $image; ?>" />
  <meta property="og:description" content="<?php echo $desc;?>" />
</head>
<body>
<!-- Optionally make this body content dynamic to comply with Google's TOS -->
</body>
</html>