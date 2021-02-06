import { genPath, formatCode, genJsDoc } from 'free-swagger-client'
import { ApiCollection } from '../parse/path'
import { ServerConfig } from '../utils'
import { uniq, isEmpty } from 'lodash'
import { DEFAULT_HEAD_CODE_JS, DEFAULT_HEAD_CODE_TS } from '../default'
import { INTERFACE_PATH } from './interface'

const genImportInterfaceCode = (apiCollection: ApiCollection): string => {
  const importsInterface = uniq(
    Object.keys(apiCollection)
      .map((key) => apiCollection[key])
      .reduce<string[]>((acc, cur) => [...acc, ...cur.imports], [])
  )
  if (isEmpty(importsInterface)) return ''
  return `import {${importsInterface.join(',')}} from "${INTERFACE_PATH}";`
}

// 生成单个 controller（文件）中所有 api
const genPaths = (
  apiCollection: ApiCollection,
  config: Required<ServerConfig>
): string => {
  let code = ''
  code += config.lang === 'ts' ? DEFAULT_HEAD_CODE_TS : DEFAULT_HEAD_CODE_JS
  code += config.lang === 'ts' ? genImportInterfaceCode(apiCollection) : ''
  code += `${config.customImportCode}\n`
  code += Object.values(apiCollection)
    .map(
      (api) =>
        (config.useJsDoc ? genJsDoc(api) : '') +
        genPath(api, config.templateFunction, config.useJsDoc)
    )
    .reduce((acc, cur) => acc + cur)

  return formatCode(config.lang)(code)
}

export { genPaths }
