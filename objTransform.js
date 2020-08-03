/*
 * @@Description: 对象扁平化
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-03 09:34:33
 * @LastEditTime: 2020-08-03 09:49:42
 * @LastEditors: i.mengxh@gmail.com
 */
/**
 * 
 * var entryObj = {
	a: {
		b: {
			c: {
				dd: 'abcdd'
			}
		},
		d: {
			xx: 'adxx'
		},
		e: 'ae'
	}
}
 * 
 */

// 要求输出
/**
 * 
 * // 要求转换成如下对象
var outputObj = {
	'a.b.c.dd': 'abcdd',
	'a.d.xx': 'adxx',
	'a.e': 'ae'
}
 * 
 */

let entryObj = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
};
function Transform(entryObj) {
    let newObj = {};
    function trans(data, keys = '') {
        for (let key in data) {
            if (typeof data[key] == 'object') {
                trans(data[key], keys + key + '.');
            } else {
                newObj[keys + key] = data[key];
            }
        }
    }

    trans(entryObj);
    return newObj;
}

console.log(Transform(entryObj));