<?php
// +----------------------------------------------------------------------
// | Demila [ Beautiful Digital Content Trading System ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015 http://demila.org All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Email author@demila.org
// +----------------------------------------------------------------------

_setView ( ROOT_PATH . "/apps/" . $_GET ['m'] . "/admin/add.php" );
_setTitle ( $langArray ['edit'] );

	if(!isset($_GET['id']) || !is_numeric($_GET['id'])) {
		refresh('?m='.$_GET['m'].'&c=list', 'INVALID ID', 'error');
	}

	if(!isset($_GET['p'])) {
		$_GET['p'] = '';
	}	
	
	$cms = new quiz();
	
	if(isset($_POST['edit'])) {
		$status = $cms->edit ($_GET['id']);
		if ($status !== true) {			
			abr('error', $status);
		} else {
			refresh ( "?m=" . $_GET ['m'] . "&c=list&p=".$_GET['p'], $langArray ['edit_complete'] );
		}
	}
	else {
		$_POST = $cms->get($_GET['id']);
	}	
	
?>