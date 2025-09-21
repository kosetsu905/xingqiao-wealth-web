
/**
 * 安全解析浮点数
 * @param {*} value - 要解析的值
 * @returns {number} 解析后的数字，无效值返回0
 */
export function parseFloat(value) {
    // 处理空值或undefined
    if (value === null || value === undefined || value === '') {
        console.warn("输入值为空");
        return 0;
    }

    // 如果已经是数字，直接返回
    if (typeof value === 'number') {
        return value;
    }

    // 尝试解析字符串
    const parsed = window.parseFloat(value);

    // 检查解析结果是否有效
    if (isNaN(parsed) || !isFinite(parsed)) {
        console.error("无效的数字格式:", value);
        return 0; // 返回默认值而不是NaN，避免破坏计算
    }

    return parsed;
}

/**
 * 带有小数位数控制的parseFloat方法
 * @param {*} value - 要解析的值
 * @param {number} decimals - 保留的小数位数，默认为2
 * @returns {number} 解析并格式化后的数字
 */
export function parseFloatFixed(value, decimals = 2) {
    const parsed = parseFloat(value);
    return parseFloat(parsed.toFixed(decimals));
}

/**
 * 安全解析整数
 * @param {*} value - 要解析的值
 * @param {number} radix - 进制，默认为10
 * @returns {number} 解析后的整数，无效值返回0
 */
export function parseInt(value, radix = 10) {
    // 处理空值或undefined
    if (value === null || value === undefined || value === '') {
        console.warn("输入值为空");
        return 0;
    }

    // 如果已经是数字，直接返回整数部分
    if (typeof value === 'number') {
        return Math.floor(value);
    }

    // 尝试解析字符串
    const parsed = window.parseInt(value, radix);

    // 检查解析结果是否有效
    if (isNaN(parsed) || !isFinite(parsed)) {
        console.error("无效的整数格式:", value);
        return 0; // 返回默认值而不是NaN，避免破坏计算
    }

    return parsed;
}

/**
 * 格式化货币显示
 * @param {*} value - 要格式化的值
 * @param {string} currency - 货币符号，默认为'¥'
 * @param {number} decimals - 小数位数，默认为2
 * @returns {string} 格式化后的货币字符串
 */
export function formatCurrency(value, currency = '¥', decimals = 2) {
    const num = parseFloat(value);
    return `${currency}${num.toLocaleString('zh-CN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    })}`;
}

/**
 * 格式化百分比显示
 * @param {*} value - 要格式化的值
 * @param {number} decimals - 小数位数，默认为2
 * @param {boolean} showSymbol - 是否显示百分号，默认为true
 * @returns {string} 格式化后的百分比字符串
 */
export function formatPercentage(value, decimals = 2, showSymbol = true) {
    const num = parseFloat(value);
    const formatted = num.toLocaleString('zh-CN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
    return showSymbol ? `${formatted}%` : formatted;
}

/**
 * 格式化大数字显示（添加千分位分隔符）
 * @param {*} value - 要格式化的值
 * @param {number} decimals - 小数位数，默认为2
 * @returns {string} 格式化后的数字字符串
 */
export function formatNumber(value, decimals = 2) {
    const num = parseFloat(value);
    return num.toLocaleString('zh-CN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

/**
 * 判断数字是否为正数
 * @param {*} value - 要判断的值
 * @returns {boolean} 是否为正数
 */
export function isPositive(value) {
    const num = parseFloat(value);
    return num > 0;
}

/**
 * 判断数字是否为负数
 * @param {*} value - 要判断的值
 * @returns {boolean} 是否为负数
 */
export function isNegative(value) {
    const num = parseFloat(value);
    return num < 0;
}

/**
 * 判断数字是否为零（考虑浮点数精度问题）
 * @param {*} value - 要判断的值
 * @param {number} epsilon - 精度范围，默认为0.000001
 * @returns {boolean} 是否为零
 */
export function isZero(value, epsilon = 0.000001) {
    const num = parseFloat(value);
    return Math.abs(num) < epsilon;
}

/**
 * 安全的数字比较
 * @param {*} a - 第一个数字
 * @param {*} b - 第二个数字
 * @param {number} epsilon - 精度范围，默认为0.000001
 * @returns {number} -1: a<b, 0: a≈b, 1: a>b
 */
export function compare(a, b, epsilon = 0.000001) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const diff = numA - numB;

    if (Math.abs(diff) < epsilon) {
        return 0; // 相等
    }
    return diff < 0 ? -1 : 1; // 小于或大于
}

/**
 * 数字四舍五入到指定的小数位数
 * @param {*} value - 要舍入的值
 * @param {number} decimals - 小数位数
 * @returns {number} 舍入后的数字
 */
export function round(value, decimals) {
    const num = parseFloat(value);
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * 数字向下舍入到指定的小数位数
 * @param {*} value - 要舍入的值
 * @param {number} decimals - 小数位数
 * @returns {number} 舍入后的数字
 */
export function floor(value, decimals) {
    const num = parseFloat(value);
    return Math.floor(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * 数字向上舍入到指定的小数位数
 * @param {*} value - 要舍入的值
 * @param {number} decimals - 小数位数
 * @returns {number} 舍入后的数字
 */
export function ceil(value, decimals) {
    const num = parseFloat(value);
    return Math.ceil(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * 限制数字在指定范围内
 * @param {*} value - 要限制的值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 限制后的数字
 */
export function clamp(value, min, max) {
    const num = parseFloat(value);
    const minNum = parseFloat(min);
    const maxNum = parseFloat(max);

    if (num < minNum) return minNum;
    if (num > maxNum) return maxNum;
    return num;
}

/**
 * 将数字转换为带有单位的可读格式（如K, M, B）
 * @param {*} value - 要转换的值
 * @param {number} decimals - 小数位数，默认为2
 * @returns {string} 带有单位的可读格式字符串
 */
export function formatWithUnit(value, decimals = 2) {
    const num = parseFloat(value);

    if (num >= 1e9) {
        return `${(num / 1e9).toFixed(decimals)}B`;
    }
    if (num >= 1e6) {
        return `${(num / 1e6).toFixed(decimals)}M`;
    }
    if (num >= 1e3) {
        return `${(num / 1e3).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
}
