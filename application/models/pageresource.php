<?php 
 class pageresource extends Model{
private $id;
private $resourcepath;
private $resourceType;


		public function getid()
		{
 		return $this->id;
}

		public function getresourcepath()
		{
 		return $this->resourcepath;
}

		public function getresourceType()
		{
 		return $this->resourceType;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setresourcepath($resourcepath)
		{
		  $this->resourcepath=$resourcepath;
		}

		public function setresourceType($resourceType)
		{
		  $this->resourceType=$resourceType;
		}
} 
 ?>