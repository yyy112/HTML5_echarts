### offsetParent(如果body和html之间的margin被清掉)
        本身定位为fixed
                    ---->offsetParen：null（ie7以上（不是火狐））
                    ---->offsetParent:body(火狐)
        本身定位不为fixed
                    父级没有定位
                            ---->offsetParent:body
                    父级有定位
                            ---->offsetParent:定位父级

### haslayout
    ie7以下，如果当前元素的某个父级触发了haslayout
        那么offsetParent就会被指向到这个触发了layout特性的父节点上

### 注意点
    1.分清parenNode和offsetParen的区别
        parentNode：直接父级
        offsetParent：类似于css的包含块

    2.offsetParent的作用
        offsetLeft 和offsetTop是参照于offsetParent的内边距边界的

    3.dom里所有的元素都是有offsetLeft和offsetTop的

    
