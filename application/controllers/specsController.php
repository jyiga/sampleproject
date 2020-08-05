<?php
class specsController extends Controller
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
		$this->_model->setspecId($_REQUEST['specId']);
		$this->_model->setitemId($_REQUEST['itemId']);
		$this->_model->setspecText($_REQUEST['specText']);
		$this->set('json', $this->_model->__update());
	}
	public function add()
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setspecId($_REQUEST['specId']);
		$this->_model->setitemId($_REQUEST['itemId']);
		$this->_model->setspecText($_REQUEST['specText']);
		$this->set('json', $this->_model->__save());
	}
	public function delete($id)
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setid($id);
		$this->set('json', $this->_model->__delete());
	}

	// TODO saving specification
	// Not needed use the add function
	public function addItem($id)
	{
		$this->doNotRenderHeader = 1;
		$this->_model->setspecId($_REQUEST['specId']);
		//Not needed
		//echo $_REQUEST['specText'];
		$this->_model->setitemId($id);
		$this->_model->setspecText($_REQUEST['specText']);
		$this->set('json', $this->_model->__save());
	}

	//Not needed use the viewall function
	public function itemSpec()
	{
		$this->doNotRenderHeader = 1;
		$sql = 'select items.id, items.itemName, items.filename, GROUP_CONCAT(spec.specText) as specs from (select item.id, item.itemName, itemimage.filename from item inner join itemimage on item.id=itemimage.id group by item.id) as items inner join spec on spec.itemId = items.id group by items.id';
		$this->set('json', $this->_model->__resultset($sql));
	}
}
