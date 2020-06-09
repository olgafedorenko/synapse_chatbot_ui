// // -----------------------------------------------------------------------------------------
// // ------------------------------------ Library Imports ------------------------------------
// // -----------------------------------------------------------------------------------------

// import React, { Component } from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';

// // -----------------------------------------------------------------------------------------
// // ------------------------------------- Local Imports -------------------------------------
// // -----------------------------------------------------------------------------------------

// import {
//   Wrapper,
//   CloseVoiceMemo,
//   VoiceMemoVisualWrapper,
//   RecordingStatusText,
//   RecordIconWrapper,
//   ResponseWrapper,
//   ResponseTextWrapper
// } from './voiceMemo.styles';

// import {
//   voiceMemoRecordIcon,
//   voiceMemoCloseIcon,
//   voiceMemoPlayButton,
//   voiceMemoStopRecordIcon,
//   sendButton,
//   voiceMemoPauseButton,
// } from '../../../../svg/voiceMemoSVGs/voiceSVG';
// import { checkIfConversationExist } from '../../../../utils/servicingCallbacks';
// import formatDuartion from '../../../../helper/formatDuration';
// import { fileEncoder } from '../../../common/UploadFile';
// import SwitchButton from './switchButton';
// // import { sendMessage } from '../../../../../redux/actions/chatbox';
// // import { TRANSCRIPT_TYPE_UPLOAD } from '../../../../../redux/constants/chatboxConstants';

// // -----------------------------------------------------------------------------------------
// // ----------------------------------- Component & Render ----------------------------------
// // -----------------------------------------------------------------------------------------

// class VoiceMemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       recording: false,
//       duration: 0,
//       audioUrl: false,
//       base64: false,
//       size: false,
//       playing: false,
//       paused: false,
//       playback: 0,
//       checked: true
//     };
//     // const [checked, setChecked] = React.useState(false);
//   }


//   componentDidMount = async () => {
//     // if (MediaRecorder.notSupported) {
//     //   noSupport.style.display = 'block'
//     //   dictaphone.style.display = 'none'
//     // }
//     const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });

//     this.mediaRecorder = new MediaRecorder(mediaStream);
//     this.chunks = [];
//     this.mediaRecorder.addEventListener('dataavailable', (event) => {
//       this.chunks.push(event.data);
//     });
//   };

//   // componentDidUpdate = (prevProps) => {
//   //   if (prevProps.step.ticketId !== this.props.ticketId) {
//   //     window.URL.revokeObjectURL(this.state.audioUrl);
//   //     this.setState({
//   //       recording: false,
//   //       audioUrl: false,
//   //       base64: false,
//   //       size: false,
//   //       playing: false,
//   //       paused: false,
//   //       duration: 0,
//   //       playback: 0,
//   //     });
//   //   }
//   // }


//   startRecording = (e) => {
//     e.preventDefault();
//     const { audioUrl } = this.state;

//     if (audioUrl) window.URL.revokeObjectURL(audioUrl);
//     // wipe old data chunks
//     this.chunks = [];
//     // start recorder with 100ms buffer
//     this.mediaRecorder.start(100);
//     // say that we're recording
//     this.setState({ recording: true, audioUrl: false });
//     this.interval = setInterval(() => {
//       this.setState(st => ({ duration: st.duration + 1 }));
//     }, 1000);
//   };


//   stopRecording = (e) => {
//     e.preventDefault();
//     // stop the recorder
//     this.mediaRecorder.stop();
//     // say that we're not recording
//     this.setState({ recording: false });
//     // save the video to memory
//     this.saveAudio();
//     clearInterval(this.interval);
//   };


//   saveAudio = () => {
//     // document.getElementById('scrolling').scrollIntoView({ block: 'end', behavior: 'smooth' });

//     const audioBlob = new Blob(this.chunks, { type: 'audio/mpeg' });
//     const audioUrl = URL.createObjectURL(audioBlob);
//     this.audio = new Audio(audioUrl);
//     this.audio.addEventListener('ended', this.handlePlayEnd);
//     this.setState({ audioUrl }, () => {
//       document.getElementById('scrolling').scrollIntoView({ block: 'end', behavior: 'smooth' });
//     });
//     const reader = new FileReader();
//     reader.readAsDataURL(audioBlob);
//     reader.onloadend = () => {
//       const base64 = reader.result;
//       this.setState({ base64, size: audioBlob.size });
//     };
//   };

//   playOrPause = () => {
//     const { playing, paused } = this.state;
//     if (!playing || paused) {
//       this.audio.play();
//       this.setState({ playing: true, paused: false });
//       this.playbackInterval = setInterval(() => {
//         this.setState(st => ({ playback: st.playback + 1 }));
//       }, 1000);
//     } else {
//       this.audio.pause();
//       this.setState({ paused: true });
//       clearInterval(this.playbackInterval);
//     }
//   };

//   pauseRecording = () => {
//     this.audio.pause();
//     this.setState({ paused: true });
//     clearInterval(this.playbackInterval);
//   }

//   handlePlayEnd = (e) => {
//     clearInterval(this.playbackInterval);
//     this.setState({
//       playing: false,
//       paused: false,
//       playback: 0,
//     });
//   };


//   handleClose = () => {
//     const { closeVoiceMemo } = this.props;
//     const { audioUrl } = this.state;
//     window.URL.revokeObjectURL(audioUrl);
//     closeVoiceMemo();
//   };


//   pickClickFunction = () => {
//     // const { recording, audioUrl, playing } = this.state;
//     // if (recording) return this.stopRecording;
//     // if (audioUrl && playing) {
//     //   this.setState({ playing: true });
//     //   return this.playAudio;
//     // }
//     // return this.startRecording;

//     const { recording, audioUrl, playing, paused } = this.state;
//     if (recording) return this.stopRecording;
//     if (playing || paused || audioUrl) return this.playOrPause;
//     return this.startRecording;
//   };


//   pickClickText = () => {
//     const { recording, audioUrl, playing } = this.state;
//     if (recording) return 'Stop recording ';
//     if (audioUrl) return 'Play recording';
//     if (playing) return 'Pause recording';
//     return 'Start recording';
//   };

//   pickPlayPauseIcon = (clientColor) => {
//     const { playing, paused, audioUrl, recording } = this.state;
//     if (!audioUrl && !recording) return voiceMemoRecordIcon(clientColor);
//     if (!audioUrl && recording) return voiceMemoStopRecordIcon(clientColor);
//     const color = 'white';
//     return playing && !paused
//       ? voiceMemoPauseButton(color, false, false, clientColor)
//       : voiceMemoPlayButton(color, false, false, clientColor);
//   };

//   toggleChecked = () => {
//     const { checked } = this.state;
//     this.setState({ checked: !checked });
//   };


//   handleSubmit = (e) => {
//     const { userInfo, ticketId, sendMessage, renderedSteps } = this.props;
//     const { size, base64, duration, checked } = this.state;
//     const now = new Date();
//     const when = `${now.getMonth()}.${now.getDate()}.${now.getFullYear()}-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
//     const meta = {
//       size,
//       // duration: formatDuartion(duration),
//       duration,
//       name: `Voice-Message-${userInfo.legal_names[0]}-${when}.mp2`,
//     };

//     // const step = {
//     //   content: base64,
//     //   user: true,
//     //   type: 'FILE_UPLOAD',
//     //   meta
//     // };
//     let nextStep;
//     if (checked) {
//       nextStep = {
//         trigger: 'audio',
//         autoTrigger: true
//       };
//     }

//     const step = {
//       image: true,
//       content: base64,
//       sender_type: 'USER',
//       user: true, // message is from user
//       remove: false,
//       hideUndo: true,
//       preview: false,
//       meta,
//       type: 'FILE_UPLOAD',
//       created_date: Date.now(),
//       // callback: createMessage
//       trigger: checked ? 'audio' : undefined,
//       autoTrigger: checked ? true : undefined
//     };
//     // updateUserInput(step, stepReducer.renderedSteps.concat(fileRespond.step));

//     // store.dispatch(updateRenderedSteps(newSteps));
//     fileEncoder(step, null, null, checkIfConversationExist);
//     // if (checked) {
//     //   const step2 = {
//     //     content: 'Audio Requested',
//     //     user: true,
//     //     type: 'TEXT',
//     //   };
//     //   setTimeout(() => {
//     //     checkIfConversationExist(step2, 'TEXT');
//     //     updateUserInput(step2, renderedSteps.concat(step2));
//     //   }, 5000);
//     // }
//     this.handleClose();
//   };


//   render() {
//     const { audioUrl, duration, recording, playing, playback, checked } = this.state;
//     const { clientColor } = this.props;
//     const showDuration = audioUrl || recording;
//     return (
//       <div style={{ width: '100%', height: 'auto' }}>
//         <div style={{ width: '100%', height: '100%' }}>
//           <Wrapper>
//             <CloseVoiceMemo onClick={this.handleClose}>{voiceMemoCloseIcon()}</CloseVoiceMemo>
//             <VoiceMemoVisualWrapper onClick={this.playAudio}>
//               {showDuration && formatDuartion(playing ? playback : duration)}
//               <div>{this.pickClickText()}</div>
//               <RecordIconWrapper>
//                 <div onClick={this.pickClickFunction()} onKeyPress={this.pickClickFunction()}>
//                   {this.pickPlayPauseIcon(clientColor)}
//                   {/* {audioUrl ? (playing ? voiceMemoStopButton(clientColor) : voiceMemoPlayButton(clientColor)) : voiceMemoRecordIcon(clientColor)} */}
//                 </div>
//                 {/* {audioUrl ? <div onClick={this.handleSubmit} onKeyPress={this.handleSubmit}>{sendButton()}</div> : console.log("lol")} */}
//               </RecordIconWrapper>
//             </VoiceMemoVisualWrapper>

//             {/* <RecordingStatusText>{this.pickClickText()}</RecordingStatusText> */}
//             {audioUrl
//               // ? sendButton(clientColor)
//               ? <div onClick={this.handleSubmit} onKeyPress={this.handleSubmit}>{sendButton(clientColor)}</div>
//               : null
//             }
//           </Wrapper>
//           {audioUrl
//             ? (
//               <ResponseWrapper>
//                 <ResponseTextWrapper>Receive Audio Response</ResponseTextWrapper>
//                 <SwitchButton
//                   value={checked}
//                   propName="switch"
//                   clientColor={clientColor}
//                   onChange={(e, value) => this.setState({ checked: value })}
//                 />
//                 {/* <Switch checked={checked} onChange={this.toggleChecked} />
//               <AntSwitch checked={checked} onChange={this.toggleChecked} name="checkedC" /> */}
//                 {/* <IOSSwitch checked={checked} onChange={this.toggleChecked} name="checkedC" /> */}
//               </ResponseWrapper>
//             )
//             : null}
//           {/* <SendIcon onClick={this.handleSubmit} clientColor={clientColor} id="closeIcon">
//           <SendBtn clientColor={clientColor} id="sendBtn" />
//         </SendIcon> */}
//         </div>
//       </div>
//     );
//   }
// }


// function mapStateToProps(state) {
//   return {
//     clientColor: state.stepReducer.chatbot.clientColor,
//     userInfo: state.stepReducer.userInfo,
//     renderedSteps: state.stepReducer.renderedSteps

//   };
// }


// const mapDispatchToProps = dispatch => ({
//   checkIfConversationExist: (step, type) => dispatch(checkIfConversationExist(step, type)),
// });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);


// export default compose(withConnect)(VoiceMemo);
