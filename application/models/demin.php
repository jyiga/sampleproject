<?php 
 class demin extends Model{
private $id;
private $width;
private $height;
private $depth;


		public function getid()
		{
 		return $this->id;
}

		public function getwidth()
		{
 		return $this->width;
}

		public function getheight()
		{
 		return $this->height;
}

		public function getdepth()
		{
 		return $this->depth;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setwidth($width)
		{
		  $this->width=$width;
		}

		public function setheight($height)
		{
		  $this->height=$height;
		}

		public function setdepth($depth)
		{
		  $this->depth=$depth;
		}
} 
 ?>