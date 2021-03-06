'use strict';

const postButton = (args) => {
  args = args[0] === ',' ? args.slice(1) : args;
  args = args.join(' ').split(',');
  const url = (args[0] || '').trim();
  const text = (args[1] || '').trim();
  const title = (args[2] || '').trim();

  !url && hexo.log.warn('Button url must be defined!');

  return `<a class="btn" href="${ url }" ${ title.length > 0 ? ` title="${ title }"` : '' }>${ text }</a>`;
};

// {% btn url, text, title %}
hexo.extend.tag.register('button', postButton, { ends: false });
hexo.extend.tag.register('btn', postButton, { ends: false });
