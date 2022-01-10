import './App.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import FileSearch from '@/components/FileSearch'
import FileList from '@/components/FileList'
import BottomBtn from '@/components/BottomBtn'
import TabList from '@/components/TabList'
import SimpleMDE from "react-simplemde-editor";
import { CloudUploadOutlined, DiffOutlined } from '@ant-design/icons'
import "easymde/dist/easymde.min.css";

<SimpleMDE />;

const files = Array.from({ length: 15 }).map((v, m) => ({ id: m + 1, title: 'First File', body: '## First File' }))
function App() {
  return (
    <div className="App">
      <Row>
        <Col span={6}>
          <div className='App-Left'>
            <FileSearch
              title="我的云文档"
              onFileSearch={(value) => { console.log(value) }}
            />
            <FileList
              files={files}
              onFileClick={() => { }}
              onSaveEdit={() => { }}
              onFileDelete={(id) => { console.log('delete id:', id) }}
            />
            <div className='App-BottomBtns'>
              <BottomBtn
                className="App-BottomBtn"
                text="上传"
                icon={<CloudUploadOutlined />}
                onBtnClick={() => { }}
              />
              <BottomBtn
                className="App-BottomBtn"
                text="新建"
                type="primary"
                icon={<DiffOutlined />}
                onBtnClick={() => { }}
              />
            </div>
          </div>
        </Col>
        <Col span={18}>
          <div className='App-Right'>
            <TabList
              files={files}
              activeId={2}
              unsaveIds={[1, 2, 4]}
              onTabClick={(id) => { }}
              onCloseClick={(id) => { }}
            />
            <div className='Mde-Editor need_scroll'>
              <SimpleMDE
                value={'## Body'}
                onChange={(value) => { console.log(value) }}
                options={{
                  minHeight: '515px'
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
