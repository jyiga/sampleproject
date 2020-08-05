
var urlConnect;
var colId;
 function newwebpage(){
$('#dlgwebpage').dialog('open').dialog('setTitle','Enter Page ');
$('#frmwebpage').form('clear');
getCount();
 url='add'; 
}

 function editwebpage(){
 var row=$('#dgwebpage').datagrid('getSelected');
 if(row)
{
 $('#dlgwebpage').dialog('open').dialog('setTitle','Edit Page');
 $('#frmwebpage').form('load',row); 
 url='edit/'+row.id;
}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function deletewebpage(){
 var row=$('#dgwebpage').datagrid('getSelected');
 if(row)
{
 $.messager.confirm('Warning', 'Are you sure of the the act', function(r){ if (r){    $.post('delete/'+row.id,{},function(data){ $('#dgwebpage').datagrid('reload');});
 
}
});}
 else{
$.messager.show({title:'Warning!',msg:'Please select a item to to edit'});} 
}

 function savewebpage(){
 saveForm('#frmwebpage',url,'#dlgwebpage','#dgwebpage');
}

function getCount()
{
    $.post('getCount',{},function(data){
        $('#orderIndex').val(data)
    });
}
var id;
function manageContentpage()
{
    var row=$('#dgwebpage').datagrid('getSelected');
    if(row)
    {
        $('#dlgwebsection').dialog('open').dialog('setTitle','Content Manage/Add Artices');
        url=''
        id=row.id;
       $('#pageName').val(row.namepge);
       //reload the combobox
        $('#sectionx').combobox('reload','../webpagesections/viewcombobox/'+row.id);

        //add the page
        createEditor();

    }else{

    }

}
var urlInner;
function newwebpagesection()
{
    $('#dlgwebpagesection').dialog('open').dialog('setTitle','Enter Section ');
    $('#frmwebpagesection').form('clear');
     urlInner='../webpagesections/add/'+id;
}

function savewebpagesection()
{
    saveForm('#frmwebpagesection',urlInner,'#dlgwebpagesection','#dgwebpagesection');
    $('#sectionx').combobox('reload','../webpagesections/viewcombobox/'+id);
}
function createEditor()
{
   
    //TinyMCE
    tinymce.init({
        selector: "textarea#columnContent",
        theme: "modern",
        height: 300,
        content_css: '../public/theme/css/style.css',
        iconfonts_selector: '.fa, .fab, .fal, .far, .fas, .glyphicon',
        plugins: [
            'advlist autolink iconfonts lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern imagetools'
        ],
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons',
        image_advtab: true
        
    });
    tinymce.suffix = ".min";
    tinyMCE.baseURL = '../public/plugins/tinymce';
}

function saveColContain()
{
    
    var content = tinymce.activeEditor.getContent();
    $.post(urlConnect,{contextContent:content},function(data){
        var response=JSON.parse(data);
        if('msg' in response)
        {
            alert ('Error')
        }else
        {
            alert('Success')
            getContent(colId);
        }

    })
}
function getContent(id)
{
    colId=id;
    $.post('../columncontents/getContent/'+id,{},function(data){
        //get the column id:
        var response=JSON.parse(data)
        if((response.content==null && response.id==0) || (response.content=='' && response.id==0))
        {
            alert('Empty')
            urlConnect='../columncontents/add/'+id+'/0'
            //tinymce.get("#columnContent").setContent(response.content);
        }else
        {
            alert('Edit')
            urlConnect='../columncontents/add/'+id+'/'+response.id
            tinymce.activeEditor.setContent(response.content);
            //tinymce.get("textarea#columnContent").setContent(response.content);
        }
        
    })
}
function getsaveChange()
{
    $.messager.progress();
    var s = '';
    var rows = $('#pgSectionColumn').propertygrid('getChanges');
    for(var i=0; i<rows.length; i++){
        if(i==(rows.length-1))
        {
            s += rows[i].id+':'+rows[i].name + ':' + rows[i].value ;
        }else
        {
            s += rows[i].id+':'+rows[i].name + ':' + rows[i].value + ',';
        }
        
    }
    //alert(s);

    $.post('../sectioncolumns/add',{content:s},function(data){
        $.messager.progress('close');
        $('#pgSectionColumn').propertygrid('reload');
    })
    
}

function getSectionSaveChange()
{
    $.messager.progress();
    var s = '';
    var rows = $('#pgSection').propertygrid('getChanges');
    for(var i=0; i<rows.length; i++){
        if(i==(rows.length-1))
        {
            s += rows[i].id+':'+rows[i].name + ':' + rows[i].value ;
        }else
        {
            s += rows[i].id+':'+rows[i].name + ':' + rows[i].value + ',';
        }
        
    }
    //alert(s);
    $.post('../webpagesections/edit',{content:s},function(data){
        $.messager.progress('close');
        $('#pgSection').propertygrid('reload');
    })
    
}
