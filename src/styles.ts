import { css } from 'emotion';

export const styles = {
    citizen: css`
      padding-bottom: 7px;
      text-align: left;
      border: 1px;
      border-color: black;
      border-style: solid
    `,
    citizenPicture: css`
    max-height: 100px;
    max-width: 150px
    `,
    citizenList: css`
      height: 91%;
      width: 100%;
      overflow-y: scroll
    `,
    citizenManagerBar: css`
      float: right;
      height: 100%;
      background-color: brown
    `, 
    citizenManager: css`
      float: right;
      height: 100%;
      width: 30vh
    `,
    citizenManagerArrow: css`
      background-image: url("https://previews.123rf.com/images/eglazunoff/eglazunoff1811/eglazunoff181100189/112852645-paper-texture-background-crumpled-paper-texture-background-paper-textures-.jpg");
      float: left;
      width: 3.5vh;
      height: 100%
    `, 
    citizenFilter: css`
      padding-top: 2%;
      height: 7%
    `,
    fadingName: css`
      margin-top: 8vh;
      text-align: center;
      position: absolute;
      font-size: 7vh;
      width: 80%
    `,
    stage: css`
      width: 80%;
      height: 90%;
      margin-top: 5%;
      background-image: url("http://www.juegomania.org/Heimdall+2/foto/pc/6/6920/498842.jpg/Foto+Heimdall+2.jpg");
      background-size:100% 100%;
      margin-left: auto;
      margin-right: auto
    `,
    mainApp: css`
    width: 100%;
    height: 90vh;
    text-align: center;
    margin-top: 0%
  `,
}