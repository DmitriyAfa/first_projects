import './pagination.scss';

import '../../../node_modules/paginationjs/dist/pagination'


import '../../../node_modules/paginationjs/dist/pagination.css'
// function simpleTemplating(data) {
//   var html = '<ul>';
//   $.each(data, function(index, item){
//       html += '<li>'+ item +'</li>';
//   });
//   html += '</ul>';
//   return html;
// }
$('.js-pagination__container').pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  pageSize: 1,
  autoHidePrevious: true,
  autoHideNext: true,
  pageRange: 1,
  prevText: '',
  nextText: '',
  formatNavigator: '<span style="color: #f00"><%= currentPage %></span> st/rd/th, <%= totalPage %> pages, <%= totalNumber %> entries',
  position: 'top',
  // footer: 'footer'
  // callback: function(data, pagination) {
  //     var html = simpleTemplating(data);
  //     $('.js-pagination__data').html(html);
  // }
})