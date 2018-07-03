import {parseUrl} from '../assets/js/utils'

const Mock = require('mockjs')

Mock.mock(url('/users'), options => {
  return paginator({
    nickname: () => Mock.Random.cname(),
    created_at : () => Mock.Random.datetime()
  }, options, 100);
});

function paginator(templateItem, options, total = 100) {
  let {query} = parseUrl(options.url);

  let page = query.page || 1, perPage = query.per_page || 15

  let template  = {};
  let from = (page - 1) * perPage + 1
  let to = page * perPage
  templateItem['id|+1'] = from;

  template[`data|${perPage}`] = [
    templateItem
  ];

  Object.assign(template, {
    total        : total,
    per_page     : perPage,
    current_page : page,
    last_page    : Math.round(total / perPage),
    next_page_url: null,
    prev_page_url: null,
    from         : from,
    to           : to,
  });

  console.log(template);

  return Mock.mock(template)
}

function url(u) {
  return new RegExp(`${process.env.API_BASE_URL}${u}`)
}
