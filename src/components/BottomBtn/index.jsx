import styles from './index.less'
import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import classNames from 'classnames'

const BottomBtn = ({ text, type = 'default', className, icon, onBtnClick }) => {


    return <Button type={type} icon={icon} className={classNames(styles.BottomBtn, className)} onClick={onBtnClick}>
        {text}
    </Button>
}

export default BottomBtn