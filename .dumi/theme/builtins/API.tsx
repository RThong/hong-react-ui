import React, { useContext } from 'react';
import type { IApiComponentProps } from 'dumi/theme';
import { context, useApiData, AnchorLink } from 'dumi/theme';

const LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)',
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)',
  },
};

/**
 * list 显示的api数组
 */
export default ({
  identifier,
  export: expt,
  list,
}: IApiComponentProps & { list?: string }) => {
  const data = useApiData(identifier);

  let arr;
  try {
    arr = JSON.parse(list);

    if (Object.prototype.toString.call(arr) !== '[object Array]') {
      arr = undefined;
    }
  } catch (error) {
    arr = undefined;
  }

  const { locale } = useContext(context);

  const aaa = arr
    ? data[expt].filter((row) => arr.find((_) => _ === row.identifier))
    : data[expt];

  const texts = /^zh|cn$/i.test(locale)
    ? LOCALE_TEXTS['zh-CN']
    : LOCALE_TEXTS['en-US'];

  return (
    <>
      {data && (
        <table style={{ marginTop: 24 }}>
          <thead>
            <tr>
              <th>{texts.name}</th>
              <th>{texts.description}</th>
              <th>{texts.type}</th>
              <th>{texts.default}</th>
            </tr>
          </thead>
          <tbody>
            {aaa.map((row) => (
              <tr key={row.identifier}>
                <td>{row.identifier}</td>
                <td>{row.description || '--'}</td>
                <td>
                  <code>{row.type}</code>
                </td>
                <td>
                  <code>
                    {row.default || (row.required && texts.required) || '--'}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
