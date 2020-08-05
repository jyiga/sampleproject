<?php

class templatex 
{
    public static function openSection()
    {
        $html="<div class='section' id='productLine' style='background-color:#f2f3f4; margin-bottom:50px;'><div class='container'><div class='row'><div class='col-md-12' style='margin-bottom:30px;'><h4 class='text-center ban'>OUR MOST POPULAR PRODUCTS</h4></div>";
        return $html;
        
    }

    public static function openWhiteSection()
    {
        $html="<div class='section' style='background-color:#fff; margin-bottom:20px;'><div class='container'><div class='row'>";
        return $html;
        
    }

    public static function welcomeText()
    {
        
            $html="<div class='col-lg-6' style='margin-bottom:70px;'>";
            $html.="<img src='./img/7-Ways-Culture-Influences-Health-Care.png' style='width:100%;height:250px' />";
            $html.="</div>";
            $html.="<div class='col-lg-6' style='margin-bottom:70px; line-height:8px;'>";
            $html.="<h4 class='ban' style='margin-bottom:20px;'>Welcome to Full Health & Home <span>Care</span></h4>";
            $html.="<p>Our Offer is Simple: We offer the top of the range Medical Equipment and Consumables in Uganda at the Lowest Prices, with the Quickest Delivery Time.</p>";
            $html.="<p>As one of the biggest and longest- running Medical Equipment & Consumable Suppliers in the Industry.</p>";
            $html.="<p>We Pride ourselves on giving you and your Clinic, Pharmacy, Medical Center and Hospital Unrivalled Products, Support and Service.</p>";
            $html.="<p>We Partner with Pharmacies, Clinic, Medical Centers and Hospitals of all sizes- to help make their Medical Equipment & Consumables Purchase and Delivery Operation Smooth, Professional and Cost- Effective.</p>";
            $html.="<p><a href='#' class='view-btn' onclick='getQuotation()'>Get a Quote</a></p>";
            $html.="</div>";
            $html.="<div class='col-lg-6' style='margin-bottom:4%'>";
            $html.="<h4 class='ban'>ORDER NOW AND HAVE YOUR ITEMS DELIVERED INSTANTLY</h4>";
            $html.="<p>Here at Full Health& Home Care, we know how important is to feel you can rely on your suppliers.</p>";
            $html.="<p>This is especially important if your Clinic, Pharmacy, Health Centre or Hospital buys large volumes of Medical Supplies.</p>";
            $html.="<p>While other suppliers can take up week to fulfil your Order. We Offer You our next Day Delivery Promise.</p>";
            $html.="<p>Don’t put your patients out just because your Medical Equipment & Consumable suppliers move very slowly</p>";
            $html.= "";
            $html.="<p class='par' style='position:absolute;top:100%; '><a href='#' class='view-btn' onclick='getQuotation()'>Get a Quote</a></p>";
            $html.="</div>";
            $html.="<div class='col-lg-6' >";
            $html.="<img src='./img/deliveryman2.png' style='height:350px;'  />";
            $html.="</div>";
        return $html;
    }

    public static function ourclients()
    {
        $html="<div class='section' style='background-color:#f2f3f4;'><div class='container'><div class='row'><div class='col-lg-12' style='padding-bottom:15px;'>";
        $html.="<h4>Trust by:</h4><div class='col-lg-3'><img src='./img/National-Medical-Stores-NMS.jpg' height='150px' width='100%' /></div><div class='col-lg-3'><img src='./img/nba.jpg' height='150px' width='100%' /></div>";
        $html.="<div class='col-lg-3'><img src='./img/main_logo-232x80.jpg' height='150px' width='100%' /></div><div class='col-lg-3'><img src='./img/logosample.jpeg' height='150px' width='100%' /></div>";
        $html.="";
        $html.="</div></div></div>";
        return $html;
    }

    public static function footerText()
    {
       
        $html="<div class='col-lg-12'><img src='./img/100-guarantee-seal-1.jpg' style='height:250px;margin-left:35%; margin-bottom:70px;' /></div><div class='col-lg-3'></div>";
        $html.="<div class='col-lg-6' style='text-align:center;'>";
        $html.="<h4 class='ban'>FIND THE SAME MEDICAL EQUIPMENT & CONSUMABLES AT A BETTER PRICE AND WELL BEAT IT BY 5%</h4>";
        $html.="<p class='par' style='margin-bottom:30px;'>Providing you the finest labels and printing supplies is the backbone of our business. And giving you a better rate than any of our competition is our goal.";
        $html.="That’s why when you buy form FHC,<br> you can be 100% sure you’re getting your Medical Equipment & Consumables support at the best possible rate.<br><a href='#productLine' class='view-btn' style='margin-left:35%; padding-top:5px;'>Browse Products</a></p>";
        $html.="<h4 class='ban' >ORDER FROM OVER 2,000 VARIETY OF OUR SPECIALISED MEDICAL EQUIPMENT & CONSUMABLES</h4>";
        $html.="<p class='par' style='margin-bottom:30px;'>If you want the highest quality, lowest price, FASTEST Delivered Medical Equipment & Consumables for your pharmacy, Clinic, Medical Centre or Hospital, Speak with us here at FHC.";
        $html.="<br>Our dedicated customer service team will setup an account for you and look after everything you need to ensure smooth, reliable and friendly service every time. Speak with FHC today and you’ll get:";
        $html.="<ul class='listU'>";
        $html.="<li><i class='fa fa-check-circle-o'></i> One day delivery on order no matter how big or small</li>";
        $html.="<li><i class='fa fa-check-circle-o'></i> Our best price guarantee- find a lower price on any product and well beat it by 5%</li>";
        $html.="<li><i class='fa fa-check-circle-o'></i> The friendliest, most expert customer support team in the medical equipment & consumables industry</li></ul></p>";
        $html.="</div>";
        $html.="<div class='col-lg-3' style='margin-bottom:50px;'></div>";
        return $html;
    }

    public static function headerText()
    {
      
        $hmtl="<div class='col-lg-12'>";
        $hmtl.="<h4 class='ban'>WE’D LIKE TO HANDLE YOUR NEXT MEDICAL EQUIPMENT & CONSUMABLE SUPPLIES</h4>";
        $hmtl.="<p class='par'>We think buying Medical Equipment & Consumables shouldn’t have to be a time-consuming, painful experience.</p> ";
        $hmtl.="<p class='par'>That’s why with our Free Delivery You don’t have to leave your Clinic, Pharmacy, Medical Centre or Hospital.</p>";
        $hmtl.="<p class='par'>Stay Put and Have your medical equipment and consumables delivered direct to you without lifting a finger!</p>";
        $hmtl.="<p class='par'>We are Introducing the new way to purchase your next medical supplies. ";
        $hmtl.="</p>";
        $hmtl.="<h4 class='ban'>We guarante to beat any written Quote on the Market by 5%.</h4>";
        $hmtl.="<p class='par'><a href='#' class='view-btn2' onclick='getQuotation()'>Get a Quote</a></p>";
        $hmtl.="</div>";
        return $hmtl;
    }

    public static function closeSection()
    {
        return "</div></div></div>";
    }

    public static function mainFilter()
    {
        
        $hmtl="<div class='store-filter clearfix'>";
        $hmtl.="<div class='pull-left'>";
        $hmtl.="<div class='row-filter'>";
        $hmtl.="<a href='#'><i class='fa fa-th-large'></i></a>";
        $hmtl.="<a href='#' class='active'><i class='fa fa-bars'></i></a>";
        $hmtl.="</div>";
        $hmtl.="<div class='sort-filter'>";
        $hmtl.="<span class='text-uppercase'>Sort By:</span>";
        $hmtl.="<select class='input'>";
        $hmtl.="<option value='0'>Position</option>";
        $hmtl.="<option value='0'>Price</option>";
        $hmtl.="<option value='0'>Rating</option>";
        $hmtl.="</select>";
        $hmtl.="<a href='#' class='main-btn icon-btn'><i class='fa fa-arrow-down'></i></a>";
        $hmtl.="</div>";
        $hmtl.="</div>";
        $hmtl.="<div class='pull-right'>";
        $hmtl.="<div class='page-filter'>";
        $hmtl.="<span class='text-uppercase'>Show:</span>";
        $hmtl.="<select class='input'>";
        $hmtl.="<option value='0'>10</option>";
        $hmtl.="<option value='1'>20</option>";
        $hmtl.="<option value='2'>30</option>";
        $hmtl.="</select>";
        $hmtl.="</div>";
        $hmtl.="<ul class='store-pages'>";
        $hmtl.="<li><span class='text-uppercase'>Page:</span></li>";
        $hmtl.="<li class='active'>1</li>";
        $hmtl.="<li><a href='#'>2</a></li>";
        $hmtl.="<li><a href='#'>3</a></li>";
        $hmtl.="<li><a href='#'><i class='fa fa-caret-right'></i></a></li>";
        $hmtl.="</ul>";
        $hmtl.="</div>";
        $hmtl.="</div>";

        return $hmtl;
        
    }

    

    public static function sideWidget($title, $array, $id=1)
    {
        $html="<div class='aside'><h3 class='aside-title'>{$title}</h3>";
        $html.="<ul class='list-links'>";
        foreach($array as $row)
        {
            $link=$row['link'];
            $linkName=$row['linkName'];
            if($id==$row['id'])
            {
                $html.="<li class='active'><a href='{$link}'>{$linkName}</a></li><li><ul class='list-links' style='padding-left:25px;'>";
                foreach($row['itemList'] as $row2)
                {
                    $html.="<li><a href='#'>{$row2['itemName']}</a></li>";
                }
                $html.="</ul></li>";

            }

            

        }
        $html.="</ul>";
        $html.="</div>";
        return $html;

    }

    public static function links($array, $id=1)
    {
        $html="<div class='store-filter clearfix'><div class='pull-left'>";
        $html.="<ul class='size-option'>";
        foreach($array as $row)
        {
            $link=$row['link'];
            $linkName=$row['linkName'];
            if($id==$row['id'])
            {
                $html.="<li class='active'><a href='{$link}'>{$linkName}</a></li>";
            }else
            {
                $html.="<li><a href='{$link}'>{$linkName}</a></li>";
            }
            

        }
        $html.="</ul>";
        $html.="</div></div>";
        return $html;

    }


    public static function footerlink($array, $id=1)
    {
       
        $html="<ul class='list-links'>";
        foreach($array as $row)
        {
            $link=$row['link'];
            $linkName=$row['linkName'];
            if($id==$row['id'])
            {
                $html.="<li class='active'><a href='{$link}'>{$linkName}</a></li>";
            }else
            {
                $html.="<li><a href='{$link}'>{$linkName}</a></li>";
            }
        }
        $html.="</ul>";
       
        return $html;

    }


    public static function openSideWidget()
    {
        return "<div id='aside' class='col-md-3'>";

    }

    public static function closeSideWidget()
    {
        return "</div>";
    }

    public static function mainContentSection($id=0)
    {
        $category=new category();
        
        return "<div id='main' class='col-md-9'>".$category->getHeaderLink($id).templatex::mainFilter()."<div id='store'><div class='row'>";
    }
    public static function closeMainContentSection()
    {
            return "</div></div></div>".templatex::contactformDialog();
    }

    public static function singleProduct($new=false,$src,$productName,$cost='0.00',$id=1)
    {
        $productNamelen=strlen($productName);
        // let the word be one line.
        if($productNamelen>20)
        {
            //$productName=str_
            $productName=substr($productName,0,19);
            $productName.='...'; 
            
        }


        $html="<div class='col-md-6 col-sm-6 col-xs-6'><div class='product product-single'><div class='product-thumb'>";
        if($new)
        {
            $html.="<div class='product-label'><span>New</span></div>";
        }
        $html.="<button class='main-btn quick-view'><i class='fa fa-search-plus'></i> Quick view</button><img src='{$src}' alt='' style='width:90%; height:180px;'></div>";
        $html.="<div class='product-body'><h4 class='product-price'>{$cost}</h4><div class='product-rating'><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-o empty'></i></div>";
        $html.="<h2 class='product-name'><a href='#'>{$productName}</a></h2>";
        $html.="<div class='product-btns'><button class='main-btn icon-btn'><i class='fa fa-heart'></i></button><button class='main-btn icon-btn'><i class='fa fa-exchange'></i></button><button class='primary-btn add-to-cart' onclick='openModelNow({$id})'><i class='fa fa-shopping-cart'></i> Order Now</button></div></div></div></div>";

        return $html;
    }

    public static function contactformDialog()
    {
       
        $html="<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>";
        $html.="<div class='modal-dialog' role='document'>";
        $html.="<div class='modal-content'>";
        $html.="<div class='modal-header'>";
        $html.="<h5 class='modal-title' id='exampleModalLabel'>Order Now</h5>";
        $html.="<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
        $html.="<span aria-hidden='true'>&times;</span>";
        $html.="</button>";
        $html.="</div>";
        $html.="<div class='modal-body'>";
        $html.="<form id='frmcustomer' name='frmcustomer' method='post'>";
        $html.="<div class='row'>";
        $html.="<div class='col-lg-6'>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Contact</label>";
        $html.="<input name='contact' value='' id='contact' class='form-control' type='text' required  />";
        $html.="</div>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Company Name</label>";
        $html.="<input name='companyName' value='' id='companyName' class='form-control' type='email'   />";
        $html.="</div>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Quantity</label>";
        $html.="<input name='qty' value='' id='qty' class='form-control' type='text' text />";
        $html.="</div>";
        $html.="</div>";
        $html.="<div class='col-lg-6'>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Email</label>";
        $html.="<input name='email' value='' id='email' class='form-control' type='text' required  />";
        $html.="</div>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Delivery/Ship To</label>";
        $html.="<input name='place' value='' id='place' class='form-control' style='width:100%;' type='text'  />";
        $html.="</div>";
        $html.="</div>";
        $html.="</div>";
        $html.="</form>";
        $html.="</div>";
        $html.="<div class='modal-footer'>";
        $html.="<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>";
        $html.="<button type='button' class='btn btn-primary' onclick='orderNow()'>Save changes</button>";
        $html.="</div>";
        $html.="</div>";
        $html.="</div>";
        $html.="</div>";
            return $html;
    }

    public static function getQuotation()
    {
       
        $html="<div class='modal fade' id='getquote' tabindex='-1' role='dialog' aria-labelledby='getquoteLabel' aria-hidden='true'>";
        $html.="<div class='modal-dialog' role='document'>";
        $html.="<div class='modal-content'>";
        $html.="<div class='modal-header'>";
        $html.="<h5 class='modal-title' id='getquoteLabel'>Get Quote</h5>";
        $html.="<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
        $html.="<span aria-hidden='true'>&times;</span>";
        $html.="</button>";
        $html.="</div>";
        $html.="<div class='modal-body'>";
        $html.="<form id='frmcustomer2' name='frmcustomer2' method='post'>";
        $html.="<div class='row'>";
        $html.="<div class='col-lg-6'>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Contact</label>";
        $html.="<input name='contact1' value='' id='contact1' class='form-control' type='text' required  />";
        $html.="</div>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Company Name</label>";
        $html.="<input name='companyName1' value='' id='companyName1' class='form-control' type='email'   />";
        $html.="</div>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Name</label>";
        $html.="<input name='firstname' value='' id='firstname' class='form-control' type='text' text />";
        $html.="</div>";
        $html.="</div>";
        $html.="<div class='col-lg-6'>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Email</label>";
        $html.="<input name='email1' value='' id='email1' class='form-control' type='text' required  />";
        $html.="</div>";
        $html.="<div class='form-group'>";
        $html.="<label class='form-label'>Quote Details:</label>";
        $html.="<textarea name='quotedetail' row='5' id='quotedetail' class='form-control'></textarea>";
        $html.="</div>";
        $html.="</div>";
        $html.="</div>";
        $html.="</form>";
        $html.="</div>";
        $html.="<div class='modal-footer'>";
        $html.="<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>";
        $html.="<button type='button' class='btn btn-primary' onclick='sendMail()'>Submit</button>";
        $html.="</div>";
        $html.="</div>";
        $html.="</div>";
        $html.="</div>";
        return $html;
    }
    

    


}
