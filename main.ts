
enum btnList{
    //% block="中左"
    cleft = 8,
    //% block="中右"
    cright = 16,
    //% block="右上"
    rup = 12,
    //% block="右下"
    rdown = 14,
    //% block="右左"
    rleft = 13,
    //% block="右右"
    rright = 15
}

enum ToneHzTable {
    do = 262,
    re = 294,
    mi = 330,
    fa = 349,
    sol = 392,
    la = 440,
    si = 494
}

enum BeatList {
    //% block="1"
    whole_beat = 10,
    //% block="1/2"
    half_beat = 11,
    //% block="1/4"
    quarter_beat = 12,
    //% block="1/8"
    eighth_beat = 13,
    //% block="2"
    double_beat = 14,
    //% block="4"
    breve_beat = 15
}

enum eventList {
    //% block="按下"
    pressed = 1,
    //% block="抬起"
    released = 0
}

//% weight=99 icon="\uf0e7" color=#1B80C4
namespace JoyBit {
    /**
     * 摇杆横轴
     */
    //% blockId="joy_x" block="摇杆X轴值"
    //% weight=100
    export function rockerX(): number {

        return pins.analogReadPin(AnalogPin.P1);

    }

    /**
     * 摇杆纵轴
     */
    //% blockId="joy_y" block="摇杆Y轴值"
    //% weight=99
    export function rockerY(): number {
        
        return pins.analogReadPin(AnalogPin.P2);
        
    }

    /**
     * 播放音调
     */
    //% weight=89
    //% blockId="cruise_tone" block="播放音调 %tone| ，节拍 %beatInfo"
    export function myPlayTone(tone:ToneHzTable, beatInfo:BeatList): void {

        if(beatInfo == BeatList.whole_beat){
            music.playTone(tone, music.beat(BeatFraction.Whole));

        }
       
        if(beatInfo == BeatList.half_beat){
            music.playTone(tone, music.beat(BeatFraction.Half));

        }
        
        if(beatInfo == BeatList.quarter_beat){
            music.playTone(tone, music.beat(BeatFraction.Quarter));

        }

        if(beatInfo == BeatList.double_beat){
            music.playTone(tone, music.beat(BeatFraction.Double));

        }

        
        if(beatInfo == BeatList.eighth_beat){
            music.playTone(tone, music.beat(BeatFraction.Eighth));

        }

        if(beatInfo == BeatList.breve_beat){
            music.playTone(tone, music.beat(BeatFraction.Breve));

        }
        //1、16不行
        // if(beatInfo == BeatList.sixteen_beat){
        //     music.playTone(tone, music.beat(BeatFraction.SixTeenth));

        // }    
    }

    //% weight=79
    //% blockId="btn_pressed" block="按钮 %btn|  %btnEvent"
    export function btnPressed(btn:btnList, btnEvent:eventList): boolean {

        if(btn == btnList.cleft){
            return pins.digitalReadPin(DigitalPin.P8) == btnEvent;
        }else if(btn == btnList.cright){
            return pins.digitalReadPin(DigitalPin.P16) == btnEvent;
        }else if(btn == btnList.rup){
            return pins.digitalReadPin(DigitalPin.P12) == btnEvent;
        }else if(btn == btnList.rdown){
            return pins.digitalReadPin(DigitalPin.P14) == btnEvent;
        }else if(btn == btnList.rleft){
            return pins.digitalReadPin(DigitalPin.P13) == btnEvent;
        }else{
            return pins.digitalReadPin(DigitalPin.P15) == btnEvent;
        }
        
    }

}


