import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatboxService } from '../../services/chatbox/chatbox.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent implements OnInit {
  @Input() selectionInfo: string;
  @Output() closeChatBoxModel = new EventEmitter();
  MsgList: any;
  tempMsgList: any = [];
  isBtn: boolean;
  sendMessage: any;

  constructor(private chatboxService: ChatboxService) {}

  ngOnInit(): void {
    this.getMessageList();
    this.tempMsgList = [];
  }

  getMessageList(): void {
    this.chatboxService
      .getMessageList(this.selectionInfo)
      .subscribe((result) => {
        this.MsgList = result.ChatBox;
        this.tempMsgList = this.MsgList;
      });
  }

  onCloseChatBox(): void {
    this.closeChatBoxModel.emit(false);
  }

  onHelp(messageText: any): any {
    if (messageText !== '') {
      this.reciveMessage(messageText);
    }
  }

  onSendMsg(messageText: any): void {
    if (messageText !== '') {
      this.reciveMessage(messageText);
    }
  }

  reciveMessage(messageText: any): void {
    let sendMsg = {};
    sendMsg = {
      msgType: 2,
      msg: messageText,
    };

    this.sendMessage = '';
    this.chatboxService
      .getMessageList(this.selectionInfo)
      .subscribe((result) => {
        if (messageText === 'Help') {
          this.MsgList = result.ChatBox_2;
          this.tempMsgList.push(sendMsg);
          this.tempMsgList.push(this.MsgList);
        } else {
          this.MsgList = result.ChatBox_1;
          this.tempMsgList.push(sendMsg);
          this.tempMsgList.push(this.MsgList);
        }
      });
  }

  onkeyUp(messageText: any): void {
    if (messageText !== '') {
      this.isBtn = true;
    } else {
      this.isBtn = false;
    }
  }
}
