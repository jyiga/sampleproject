<div class='col-lg-12'>
	<table id='dgsectioncolumn' title='Manage sectioncolumn' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='columnNm' width='90'>Column</th>
				<th field='sectionId' width='90'>sectionId</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newsectioncolumn()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editsectioncolumn()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletesectioncolumn()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>