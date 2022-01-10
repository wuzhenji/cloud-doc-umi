import React from 'react'
import styles from './index.less'
import { Tabs, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import classNames from 'classnames';

const TablList = ({ files, activeId, unsaveIds, onTabClick, onCloseClick }) => {

    return <div tabIndex={2} className={classNames(styles.TabList, "need_scroll_x")}>
        {
            files.map(v => (
                <div
                    key={v.id}
                    className={classNames(styles.TabItem, activeId === v.id && styles.ActiveTab)}
                    onClick={() => { onTabClick() }}
                >
                    <div className={styles.TabName}>{v.title}</div>
                    <div className={styles.TabStatus}>
                        <div
                            className={styles.CloseStatus}
                            onClick={() => { onCloseClick() }}
                        >
                            <CloseOutlined />
                        </div>
                        {
                            unsaveIds.includes(v.id) && <div className={styles.UnsaveStatus}></div>
                        }
                    </div>
                </div>
            ))
        }
    </div>
}

export default TablList