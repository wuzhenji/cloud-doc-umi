import React, { useState, useEffect, useRef } from 'react'
import { Input, Button } from 'antd'
import styles from './index.less'
import useKeyPress from '@/hooks/useKeyPress'
import { CloseOutlined } from '@ant-design/icons'

const FileSearch = ({ title, onFileSearch }) => {
    const [inputActive, setInputActive] = useState(false)
    const [value, setValue] = useState('')
    const escPressed = useKeyPress(27) // esc

    const closeSearch = () => {
        setValue('')
        setInputActive(false)
        onFileSearch('')
    }

    useEffect(() => {
        if (escPressed && inputActive) {
            // ESC
            closeSearch()
        }
    }, [escPressed]);

    return (
        <div className={styles.SearchBox}>
            {
                !inputActive && <>
                    <span>{title}</span>
                    <Button
                        type='primary'
                        onClick={() => { setInputActive(true) }}
                    >
                        搜索
                    </Button>
                </>
            }
            {
                inputActive && <>
                    <Input.Search
                        value={value}
                        autoFocus
                        onChange={(e) => { setValue(e.target.value) }}
                        onSearch={() => { onFileSearch(value) }}
                    />
                    <Button
                        type='pramary'
                        icon={<CloseOutlined />}
                        onClick={() => closeSearch()}
                    ></Button>
                </>
            }
        </div>
    )
}

export default FileSearch