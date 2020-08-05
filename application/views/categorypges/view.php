<div class='col-lg-12'>
	<table id='dgcategorypge' title='Manage categorypge' class='easyui-datagrid' style='height:auto; width:100%; ' url='viewall' pagination='true' toolbar='#toolbar' rownumbers='true' fitColumns='true' singleSelect='true' iconCls='fa fa-table'>
		<thead>
                        	
			<tr>
				<th field='id' width='90'>id</th>
				<th field='categoryId' width='90'>categoryId</th>
				<th field='fileName' width='90'>fileName</th>
				<th field='filePath' width='90'>filePath</th>
				<th field='creationDate' width='90'>creationDate</th>
			</tr>
		</thead>
	</table>
	<div id='toolbar' style:'padding:15px;'>
		<a href="#" class="btn btn-primary btn-sm" onclick="newcategorypge()"><i class="fa fa-plus-circle"></i>Add</a>
		<a href="#" class="btn btn-link" onclick="editcategorypge()"><i class="fa fa-pencil"></i>Edit</a>
		<a href="#" class="btn btn-link" onclick="deletecategorypge()"><i class="fa fa-times-circle"></i>Delete</a>
	</div>
</div>