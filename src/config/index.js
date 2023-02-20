
/**
 * 是否展示顶部标题栏
 * { boolean } 是否展示
 */
export const showHeader = true;

/**
 * 项目名称 （可选）
 * 用于项目的顶部标题栏 如果不渲染顶部标题栏则忽略此项
 * { string } 标题名称
 */
export const projectName = 'Test Name';

/**
 * 目录顺序
 * file { string } pages 目录下的文件名 以 / 开头 
 *      用于匹配文件并按照顺序排序导航栏 如果没有则不显示
 *      到导航栏上
 */
export const nav = [
    'test',
    'abc/efg/bb',
    'test-copy',
]