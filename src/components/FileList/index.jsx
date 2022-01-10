import styles from './index.less'
import React, { useState, useEffect, useRef } from 'react'
import { Dropdown, Menu, Tooltip, Button, Input, Space, Modal } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import useKeyPress from '@/hooks/useKeyPress'

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {

    const [editId, setEditId] = useState(0) // 编辑的id
    const [editvalue, setEditValue] = useState('') // 编辑的内容
    const escPressed = useKeyPress(27) // esc
    const enterPressed = useKeyPress(13) // esc

    useEffect(() => {
        if (escPressed) {
            resetEdit()
        }
    }, [escPressed]);

    useEffect(() => {
        if (enterPressed) {
            onSaveEdit()
        }
    }, [enterPressed]);


    // 清空编辑状态
    const resetEdit = () => {
        setEditId(0)
        setEditValue('')
    }

    const actionMenu = (fileInfo) => {
        const { id, title } = fileInfo
        return <Menu>
            <Menu.Item onClick={() => {
                setEditId(id)
                setEditValue(title)
            }}>重命名</Menu.Item>
            <Menu.Item danger onClick={() => {
                Modal.confirm({
                    title: '确认删除？',
                    content: '删除后不可恢复，确认继续？',
                    okText: '确定',
                    cancelText: '取消',
                    onOk: () => {
                        onFileDelete(id)
                    }
                })
            }}>删除</Menu.Item>
        </Menu>
    }

    return <div className={classNames(styles.FileList, "need_scroll")}>
        {
            files.map(v => (
                <div key={v.id} className={styles.FileItem}>
                    { // 未编辑
                        editId !== v.id && <>
                            <Tooltip title={v.title}>
                                <div key={v.id} className={styles.FileName}>
                                    {v.title}
                                </div>
                            </Tooltip>
                            <Dropdown trigger={["click"]} overlay={actionMenu(v)}>
                                <div className={styles.MoreActionBtn}>
                                    <MoreOutlined className={styles.MoreActionIcon} />
                                </div>
                            </Dropdown>
                        </>
                    }
                    { // 编辑中
                        editId === v.id && <Space>
                            <Input value={editvalue} autoFocus onChange={(e) => { setEditValue(e.target.value) }} />
                            <Button size='small' type="primary" onClick={() => { onSaveEdit() }}>确定</Button>
                            <Button size='small' onClick={() => { resetEdit() }}>取消</Button>
                        </Space>
                    }
                </div>

            ))
        }
    </div>
}

export default FileList