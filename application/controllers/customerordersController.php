<?php 
 class customerordersController extends Controller{

 	 	 public function view()
 	 	{
	 	}	
 	 	public function viewcombobox()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__viewCombo());
	 	}	
 	 	 public function viewall()
 	 	{
				$this->doNotRenderHeader=1;
				   $sql="Select co.*,c.firstName companyName,c.email,c.contact from customerorder co inner join customer c on co.customerId=c.id order by status desc";
	 	 	 	$this->set('json',$this->_model->__viewSql($sql));
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
				$this->_model->setid(htmlspecialchars($id));
					
				//$this->_model->setsessionId($_SESSION['cartId']);

				//$this->_model->setorderDate(htmlspecialchars($_REQUEST['orderDate']));
				//$this->_model->setcustomerId(htmlspecialchars($_REQUEST['customerId']));
				$this->_model->setstatus(htmlspecialchars($_REQUEST['status']));
				//$this->_model->setmoditifedDate(htmlspecialchars($_REQUEST['moditifedDate']));
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add($itemId)
 	 	 {
				$this->doNotRenderHeader=1;
				utility::checkTokenTime();
				$customer = new customer();

				$pad_length = 4;
				$pad_char = 0;
				$str_type = 'd';

				$format = "%{$pad_char}{$pad_length}{$str_type}";
				$formatted_str = sprintf($format, ($customer->_count()+1));
				//Add  customer
				
				$customer->setid($formatted_str);
				$customer->setfirstName(htmlspecialchars($_REQUEST['companyName']));
				$customer->setemail(htmlspecialchars($_REQUEST['email']));
				$customer->setcontact(htmlspecialchars($_REQUEST['contact']));
				$criteria=" (firstName='".$customer->getfirstName()."' and email='".$customer->getemail()."') and contact='".$customer->getcontact()."'";
				$customer->__saveUnquie($criteria);

				

				$this->_model->setsessionId($_SESSION['cartId']);
	 	 	 	 //$this->_model->setorderDate(htmlspecialchars($_REQUEST['orderDate']));
				$this->_model->setcustomerId($customer->getid());
				$this->_model->setshipTo(htmlspecialchars($_REQUEST['place']));
				$this->_model->setstatus('NEW');
				   // $this->_model->setmoditifedDate(htmlspecialchars($_REQUEST['moditifedDate']));
				$criteria2=" sessionId='".$_SESSION['cartId']."' and customerId='".$customer->getid()."'";
				$this->_model->__saveUnquie($criteria2);
				$id=$this->_model->getid();

				$orderItem = new orderitem();
				$orderItem->setorderId($id);
				$orderItem->setitemId($itemId);
				$orderItem->setqty(htmlspecialchars($_REQUEST['qty']));
				$orderItem->__save();

				$this->set('json',array('orderId'=>$id,'customerId'=>$customer->getid())); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>