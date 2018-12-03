$(document).ready(function() {

	$('.select').each(function(){
		// Variables
		var $this = $(this),
			selectOption = $this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			dur = 500;

		$this.hide();
		// Wrap all in select box
		$this.wrap('<div class="select"></div>');
		// Style box
		$('<div>',{
			class: 'select__gap',
			text: 'Please select'
		}).insertAfter($this);
		
		var selectGap = $this.next('.select__gap'),
			caret = selectGap.find('.caret');

		$('<ul>',{
			class: 'select__list'
		}).insertAfter(selectGap);		

		var selectList = selectGap.next('.select__list');
		// Add li - option items
		for(var i = 0; i < selectOptionLength; i++){
			$('<li>',{
				class: 'select__item',
				html: $('<span>',{
					text: selectOption.eq(i).text()
				})				
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
		// Find all items
		var selectItem = selectList.find('li');

		selectList.slideUp(0);
		selectGap.on('click', function(){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				selectList.slideDown(dur);

				selectItem.on('click', function(){
					var chooseItem = $(this).data('value');
					$('select').val(chooseItem).attr('selected', 'selected');
					selectGap.text($(this).find('span').text());
					var val = $('select').val();
					$('li').show();
					$('li[data-value="'+val+'"]').hide();
					selectList.slideUp(dur);
					selectGap.removeClass('on');
				});
				
			} else {
				$(this).removeClass('on');
				selectList.slideUp(dur);
			}
		});		

	});
	$('.select__list li').click(function() {
		$('input.checkbox').removeAttr('checked')
		var v = $(this).attr('data-value');
		function bank() {
			if (v == 'USD') {
				return '$'
			} else if (v == 'EUR') {
				return '€'
			} else if (v == 'RUB') {
				return '₽'
			} else if (v == 'GBP') {
				return '£'
			}
		}
			$.ajax({
			    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH'+v+'',
			    cache: false,
			    success: function(data){
			    	$('.ethereum .price p:last').text(bank()+data.ask)
			      	$('.ethereum .hour-change p:last').text(data.changes.percent.hour+'%')
				    $('.ethereum .day-change p:last').text(data.changes.percent.day+'%')
				    $('.ethereum .week-change p:last').text(data.changes.percent.week+'%')
				    $('.ethereum .month-change p:last').text(data.changes.percent.month+'%')
				    $('.ethereum input[name="one"]').click(function() {
						if ($(this).is(':checked')) {
							    $('.ethereum .hour-change p:last').text(data.changes.price.hour+bank())
							    $('.ethereum .day-change p:last').text(data.changes.price.day+bank())
							    $('.ethereum .week-change p:last').text(data.changes.price.week+bank())
							    $('.ethereum .month-change p:last').text(data.changes.price.month+bank())
						} else {
							    $('.ethereum .hour-change p:last').text(data.changes.percent.hour+'%')
							    $('.ethereum .day-change p:last').text(data.changes.percent.day+'%')
							    $('.ethereum .week-change p:last').text(data.changes.percent.week+'%')
							    $('.ethereum .month-change p:last').text(data.changes.percent.month+'%')
						}
					})
					$('.blocks > div > div').each(function() {
						var p = $(this).find('p:last');
						if(p.text().indexOf('-') > -1) {
							p.addClass('red')
						}
					})
			    }
			  });
			$.ajax({
			    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC'+v+'',
			    cache: false,
			    success: function(data){
			    	$('.litecoin .price p:last').text(bank()+data.ask)
			      	$('.litecoin .hour-change p:last').text(data.changes.percent.hour+'%')
				    $('.litecoin .day-change p:last').text(data.changes.percent.day+'%')
				    $('.litecoin .week-change p:last').text(data.changes.percent.week+'%')
				    $('.litecoin .month-change p:last').text(data.changes.percent.month+'%')
				    $('.litecoin input[name="two"]').click(function() {
						if ($(this).is(':checked')) {
							    $('.litecoin .hour-change p:last').text(data.changes.price.hour+bank())
							    $('.litecoin .day-change p:last').text(data.changes.price.day+bank())
							    $('.litecoin .week-change p:last').text(data.changes.price.week+bank())
							    $('.litecoin .month-change p:last').text(data.changes.price.month+bank())
						} else {
							    $('.litecoin .hour-change p:last').text(data.changes.percent.hour+'%')
							    $('.litecoin .day-change p:last').text(data.changes.percent.day+'%')
							    $('.litecoin .week-change p:last').text(data.changes.percent.week+'%')
							    $('.litecoin .month-change p:last').text(data.changes.percent.month+'%')
						}
					})
					$('.blocks > div > div').each(function() {
						var p = $(this).find('p:last');
						if(p.text().indexOf('-') > -1) {
							p.addClass('red')
						}
					})
			    }
			  });
			$.ajax({
			    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC'+v+'',
			    cache: false,
			    success: function(data){
			      	$('.bitcoin .price p:last').text(bank()+data.ask)
			      	$('.bitcoin .hour-change p:last').text(data.changes.percent.hour+'%')
				    $('.bitcoin .day-change p:last').text(data.changes.percent.day+'%')
				    $('.bitcoin .week-change p:last').text(data.changes.percent.week+'%')
				    $('.bitcoin .month-change p:last').text(data.changes.percent.month+'%')
				    $('.bitcoin input[name="three"]').click(function() {
						if ($(this).is(':checked')) {
							    $('.bitcoin .hour-change p:last').text(data.changes.price.hour+bank())
							    $('.bitcoin .day-change p:last').text(data.changes.price.day+bank())
							    $('.bitcoin .week-change p:last').text(data.changes.price.week+bank())
							    $('.bitcoin .month-change p:last').text(data.changes.price.month+bank())
						} else {
							    $('.bitcoin .hour-change p:last').text(data.changes.percent.hour+'%')
							    $('.bitcoin .day-change p:last').text(data.changes.percent.day+'%')
							    $('.bitcoin .week-change p:last').text(data.changes.percent.week+'%')
							    $('.bitcoin .month-change p:last').text(data.changes.percent.month+'%')
						}
					})
					$('.blocks > div > div').each(function() {
						var p = $(this).find('p:last');
						if(p.text().indexOf('-') > -1) {
							p.addClass('red')
						} 
					})
			    }
			  });
	})
})