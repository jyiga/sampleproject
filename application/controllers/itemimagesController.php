<?php
class itemimagesController extends Controller
{

	public function view()
	{
	}
	public function viewcombobox()
	{
		$this->doNotRenderHeader = 1;
		$this->set('json', $this->_model->__viewCombo());
	}
	public function viewall()
	{
		$this->doNotRenderHeader = 1;
		$this->set('json', $this->_model->__view());
	}
	public function edit($id)
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setid($id);
		$this->_model->setfilename($_REQUEST['filename']);
		$this->_model->setisActive($_REQUEST['isActive']);
		$this->set('json', $this->_model->__update());
	}
	public function add()
	{
		$this->doNotRenderHeader = 1;

		$list = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png");

		$path = utility::importFile('file', $list);
		$this->_model->setid($_REQUEST['id']);
		$this->_model->setfilename($path['path']);
		$this->_model->setisActive(1);
		$this->set('json', $this->_model->__save());
	}
	public function delete($id)
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setid($id);
		$this->set('json', $this->_model->__delete());
	}
}
