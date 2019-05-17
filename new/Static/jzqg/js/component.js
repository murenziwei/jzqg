Vue&&(function(lw){
	//	页面倒退组件
	lw.component('lw-back',{
		props:['backV'],
		template:`<div class='nav-back'>
		<a onclick="layer&&layer.load(1);window.history.go(-1)" class='nb-link'><img src='/Public/component/left-cut.png' class='nl-icon' /></a>
		<span class='nb-text'>{{backV}}</span>
		</div>`
	})

	// 底部导航组件
	lw.component('lw-tabbar',{
		props:['pageActive'],
		data(){
			return {
				
			}
		},
		template:`
		<div class="mt-footer">
			<div class="my-tabbar">
			  
			    <a onclick="layer&&layer.load(1);" href="/index.php?s=/Mobile/Index/index.html" :class="{'mt-item':true,'active':pageActive==0}">
					<img src="/Public/component/home.png" alt="" class="mi-icon" />
					
					<span class="mi-text">首页</span>
				</a>
			    <a onclick="layer&&layer.load(1);" href="/index.php?s=/Mobile/Store/index.html"  :class="{'mt-item':true,'active':pageActive==1}">
					<img src="/Public/component/shell.png" alt="" class="mi-icon" />
					
					<span class="mi-text">商家</span>
				</a>
			    <a onclick="layer&&layer.load(1);"  href="/index.php?s=/Mobile/User/butor_index.html"  :class="{'mt-item':true,'active':pageActive==2}">
					<img src="/Public/component/fabu.png" alt="" class="mi-icon" />
			
					<span class="mi-text">经销商</span>
				</a>
				<a onclick="layer&&layer.load(1);"  href="/index.php?s=/Mobile/User/index.html" :class="{'mt-item':true,'active':pageActive==3}">
					<img src="/Public/component/my-people.png" alt="" class="mi-icon" />
					
					<span class="mi-text">我的</span>
				</a>
			</div>
		</div>
		`
	})
})(Vue)


