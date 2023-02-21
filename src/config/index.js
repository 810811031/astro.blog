
/**
 * 是否展示顶部标题栏
 * { boolean } 是否展示
 */
export const showHeader = true;

/**
 * 是否展示左侧菜单栏
 * { boolean } 是否展示
 */
export const showNav = true;

/**
 * 项目名称 （可选）
 * 用于项目的顶部标题栏 如果不渲染顶部标题栏则忽略此项
 * { string } 标题名称
 */
export const projectName = 'Test Name';

/**
 * 目录顺序 （可选）如果 showNav 为 false 可以忽略以下
 * file { string } pages 目录下的文件名  
 *      用于匹配文件并按照顺序排序导航栏 如果没有则不显示
 *      到导航栏上
 */
export const nav = [
    'test',
    'abc/efg/bb',
    'test-copy',
]