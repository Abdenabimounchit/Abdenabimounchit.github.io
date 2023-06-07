oobb.Untitled_32sceneCode = {};
oobb.Untitled_32sceneCode.GDobjObjects1= [];
oobb.Untitled_32sceneCode.GDobjObjects2= [];
oobb.Untitled_32sceneCode.GDobjObjects3= [];
oobb.Untitled_32sceneCode.GDobjObjects4= [];
oobb.Untitled_32sceneCode.GDobjObjects5= [];
oobb.Untitled_32sceneCode.GDobjObjects6= [];
oobb.Untitled_32sceneCode.GDnumberObjects1= [];
oobb.Untitled_32sceneCode.GDnumberObjects2= [];
oobb.Untitled_32sceneCode.GDnumberObjects3= [];
oobb.Untitled_32sceneCode.GDnumberObjects4= [];
oobb.Untitled_32sceneCode.GDnumberObjects5= [];
oobb.Untitled_32sceneCode.GDnumberObjects6= [];
oobb.Untitled_32sceneCode.GDobjaObjects1= [];
oobb.Untitled_32sceneCode.GDobjaObjects2= [];
oobb.Untitled_32sceneCode.GDobjaObjects3= [];
oobb.Untitled_32sceneCode.GDobjaObjects4= [];
oobb.Untitled_32sceneCode.GDobjaObjects5= [];
oobb.Untitled_32sceneCode.GDobjaObjects6= [];
oobb.Untitled_32sceneCode.GDstartObjects1= [];
oobb.Untitled_32sceneCode.GDstartObjects2= [];
oobb.Untitled_32sceneCode.GDstartObjects3= [];
oobb.Untitled_32sceneCode.GDstartObjects4= [];
oobb.Untitled_32sceneCode.GDstartObjects5= [];
oobb.Untitled_32sceneCode.GDstartObjects6= [];
oobb.Untitled_32sceneCode.GDspeedObjects1= [];
oobb.Untitled_32sceneCode.GDspeedObjects2= [];
oobb.Untitled_32sceneCode.GDspeedObjects3= [];
oobb.Untitled_32sceneCode.GDspeedObjects4= [];
oobb.Untitled_32sceneCode.GDspeedObjects5= [];
oobb.Untitled_32sceneCode.GDspeedObjects6= [];
oobb.Untitled_32sceneCode.GDmonitorObjects1= [];
oobb.Untitled_32sceneCode.GDmonitorObjects2= [];
oobb.Untitled_32sceneCode.GDmonitorObjects3= [];
oobb.Untitled_32sceneCode.GDmonitorObjects4= [];
oobb.Untitled_32sceneCode.GDmonitorObjects5= [];
oobb.Untitled_32sceneCode.GDmonitorObjects6= [];
oobb.Untitled_32sceneCode.GDbarObjects1= [];
oobb.Untitled_32sceneCode.GDbarObjects2= [];
oobb.Untitled_32sceneCode.GDbarObjects3= [];
oobb.Untitled_32sceneCode.GDbarObjects4= [];
oobb.Untitled_32sceneCode.GDbarObjects5= [];
oobb.Untitled_32sceneCode.GDbarObjects6= [];
oobb.Untitled_32sceneCode.GDstopObjects1= [];
oobb.Untitled_32sceneCode.GDstopObjects2= [];
oobb.Untitled_32sceneCode.GDstopObjects3= [];
oobb.Untitled_32sceneCode.GDstopObjects4= [];
oobb.Untitled_32sceneCode.GDstopObjects5= [];
oobb.Untitled_32sceneCode.GDstopObjects6= [];
oobb.Untitled_32sceneCode.GDkbObjects1= [];
oobb.Untitled_32sceneCode.GDkbObjects2= [];
oobb.Untitled_32sceneCode.GDkbObjects3= [];
oobb.Untitled_32sceneCode.GDkbObjects4= [];
oobb.Untitled_32sceneCode.GDkbObjects5= [];
oobb.Untitled_32sceneCode.GDkbObjects6= [];


oobb.Untitled_32sceneCode.userFunc0x88a258 = function(runtimeScene) {
"use strict";
if (!runtimeScene.__ip) 
{
    const arr = runtimeScene.getVariables().get("ip");
		  arr.castTo("array");
		  const a = arr.getAllChildrenArray();



          
    runtimeScene.__ip = function(number,step) 
    {
        let firstDigit = Math.floor(number / 100);
            number %= 100;
        let secondDigit = Math.floor(number / 10);
        let thirdDigit = number % 10;

        a[step] = new oobb.Variable({
                    type: "number",
                    value: firstDigit,
            });
        a[step+1] = new oobb.Variable({
                    type: "number",
                    value: secondDigit,
            });
        a[step+2] = new oobb.Variable({
                    type: "number",
                    value: thirdDigit,
            });

        
    };
    runtimeScene.__ipgetcomplet = function() 
    {
        return  a[12].getAsNumber();
    };
    runtimeScene.__ipsetcomplet = function() 
    {
        a[12] = new oobb.Variable({
                type: "number",
                value: 1,
        });
    };
     runtimeScene.__ipgetvalue = function(m) 
    {
        return  a[m].getAsNumber();
    };

}

};
oobb.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


oobb.Untitled_32sceneCode.userFunc0x88a258(runtimeScene);

}


};oobb.Untitled_32sceneCode.userFunc0x88a460 = function(runtimeScene) {
"use strict";
    const arr = runtimeScene.getVariables().get("stop");
		  arr.castTo("array");
		  const a = arr.getAllChildrenArray();
  
    runtimeScene.__setstop = function(step,number) 
    {
        a[step] = new oobb.Variable({
                    type: "number",
                    value: number,
            });
    };
    runtimeScene.__getstop = function(step) 
    {
        return a[step].getAsNumber();
    };
   



};
oobb.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


oobb.Untitled_32sceneCode.userFunc0x88a460(runtimeScene);

}


};oobb.Untitled_32sceneCode.userFunc0x88a700 = function(runtimeScene) {
"use strict";
if (!runtimeScene.__setspeed) 
{
    let speed=0;let speedone=0;let s=0;let majmo3=0;
    let n1=0,n2=0,n3=0,n4=0,n5=0,n6=0;
    
    const arr = runtimeScene.getVariables().get("kb");
		  arr.castTo("array");
		  const a = arr.getAllChildrenArray();





    runtimeScene.__setspeed = function(number) 
    {
        if(s<9)
        {
            speed += number;
        }
        else
        {
            speed += number;
            speedone=speed;
            speed = 0;
            s = -1;
        }
        s++;
    };
    runtimeScene.__getspeed = function() 
    {
        alert("0");
        return  speed;
    };
    runtimeScene.__setspeedo = function() 
    {
        alert("1");
        speed = 0;
    };
    runtimeScene.__getspeedone = function() 
    {
        let m ;
        majmo3 = speedone/10;
        

        if (majmo3 < 1024) 
        {
            majmo3 = (majmo3).toFixed(2);
        } 
        else if (majmo3 < 1048576) 
        {
            majmo3 = (majmo3 / 1024).toFixed(2);
            a[0] = new oobb.Variable({
                    type: "number",
                    value: 1,
            });
        } 
        else if (majmo3 < 1073741824) 
        {
            majmo3 = (majmo3 / 1048576).toFixed(2);
            a[0] = new oobb.Variable({
                    type: "number",
                    value: 2,
            });
        } 
        else 
        {
            majmo3 = (majmo3 / 1073741824).toFixed(2);
            a[0] = new oobb.Variable({
                    type: "number",
                    value: 3,
            });
        }

        m = majmo3;

       
           n1 = Math.floor(majmo3 / 1000);
            majmo3 %= 1000;

            n2 = Math.floor(majmo3 / 100);
            majmo3 %= 100;

        
            n3 = Math.floor(majmo3 / 10);
            n4 = Math.floor(majmo3 % 10);

            n5 = Math.floor((majmo3%1)*10);
            n6 = Math.floor((majmo3*100) % 10);


            return  m;
       
        
        
    };


    
    runtimeScene.__getspeednembern1 = function() 
    {
        return n1;
    };
    runtimeScene.__getspeednembern2 = function() 
    {
        return n2;
    };
    runtimeScene.__getspeednembern3 = function() 
    {
        return n3;
    };
    runtimeScene.__getspeednembern4 = function() 
    {
        return n4;
    };
     runtimeScene.__getspeednembern5 = function() 
    {
        return n5;
    };
     runtimeScene.__getspeednembern6 = function() 
    {
        return n6;
    };



    runtimeScene.__getaaa = function() 
    {
        return a[0].getAsNumber();
    };

    runtimeScene.__getspeedmajmor = function() 
    {
        return speedone/10;
    };

}

};
oobb.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{oobb.evtTools.runtimeScene.resetTimer(runtimeScene, "stado");
}}

}


{


oobb.Untitled_32sceneCode.userFunc0x88a700(runtimeScene);

}


};oobb.Untitled_32sceneCode.userFunc0x88a940 = function(runtimeScene) {
"use strict";
let aaa ;
let max;







let s = runtimeScene.__getspeedmajmor();



let point = [];
point=[[15,325],[25,302],[29,288],[30,272],[29,255],[33,241],[35,224],[39,207],[43,191],[55,176]
,[63,165],[68,146],[77,134],[88,122],[99,110],[106,96],[121,86],[134,76],[148,68],[161,58],[176,53],[194,46],[209,41],[224,37],[242,34],[257,33],[273,33],[290,33],[306,35],[322,39],[340,43],[354,48],[370,55],[382,66],[396,73],[411,82],[426,90],[435,102],[442,117],[460,121],[468,139],[477,152],[482,166],[491,179],[496,194],[505,209],[509,224],[513,238],[511,255],[519,272],[512,288],[516,305],[507,318]];

    runtimeScene.__getncolor = function() 
    {

        aaa = runtimeScene.__getaaa();
        

        if(aaa==1)
        {
            max =1024;
        }
        if(aaa==2)
        {
            max =1048576;
        }
        if(aaa==3)
        {
            max =1073741824;
        }



         s = runtimeScene.__getspeedmajmor();
         if(aaa==1)
         {
            
             return Math.floor((s/max)*53/1024);
         }
         else if(aaa==2)
         {
             return Math.floor((s/max)*53/1048576);
         }
         else if(aaa==3)
         {
             return Math.floor((s/max)*53/1073741824);
         }
        
    };
   

runtimeScene.__getposition = function(pos) 
    {
        return point[pos];
    };
















};
oobb.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


oobb.Untitled_32sceneCode.userFunc0x88a940(runtimeScene);

}


};oobb.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


oobb.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList2(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList3(runtimeScene);
}


};oobb.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{oobb.evtsExt__variable__variable.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__Fill.func(runtimeScene, "ip", 0, 0, 13, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__Fill.func(runtimeScene, "stop", 0, 0, 9, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtTools.runtimeScene.resetTimer(runtimeScene, "clear");
}{oobb.evtsExt__Array__Fill.func(runtimeScene, "kb", 1, 0, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
oobb.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.userFunc0x89b658 = function(runtimeScene) {
"use strict";
const canvas = runtimeScene.getGame().getRenderer().getCanvas();
canvas.width =  runtimeScene.getVariables().get("x").getAsNumber()*runtimeScene.getVariables().get("x1").getAsNumber();
canvas.height =  runtimeScene.getVariables().get("y").getAsNumber()*runtimeScene.getVariables().get("x1").getAsNumber();








};
oobb.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


{


oobb.Untitled_32sceneCode.userFunc0x89b658(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{oobb.evtTools.window.setGameResolutionSize(runtimeScene, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) - 1);
}{oobb.evtTools.window.setMargins(runtimeScene, 0, oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - Math.floor((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100), 0, 0);
}{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 0, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 1, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};oobb.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 4, oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 5, oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(oobb.evtTools.storage.elementExistsInJSONFile("width_height", "width"));
if (isConditionTrue_0) {
{oobb.evtTools.storage.writeNumberInJSONFile("width_height", "width", Math.floor((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(oobb.evtTools.storage.elementExistsInJSONFile("width_height", "height"));
if (isConditionTrue_0) {
{oobb.evtTools.storage.writeNumberInJSONFile("width_height", "height", oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


let isConditionTrue_0 = false;
{
{oobb.evtTools.storage.readNumberFromJSONFile("width_height", "width", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
{oobb.evtTools.storage.readNumberFromJSONFile("width_height", "height", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / ((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100) <= oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / ((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / ((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100) > oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
{ //Subevents
oobb.Untitled_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.userFunc0x89d4d0 = function(runtimeScene) {
"use strict";
const canvas = runtimeScene.getGame().getRenderer().getCanvas();

canvas.width =  runtimeScene.getVariables().get("x").getAsNumber()*runtimeScene.getVariables().get("x1").getAsNumber();
canvas.height =  runtimeScene.getVariables().get("y").getAsNumber()*runtimeScene.getVariables().get("x1").getAsNumber();

};
oobb.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


{


oobb.Untitled_32sceneCode.userFunc0x89d4d0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{oobb.evtTools.window.setGameResolutionSize(runtimeScene, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))) - 1);
}{oobb.evtTools.window.setMargins(runtimeScene, 0, oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - Math.floor((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100), 0, 0);
}{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 0, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 1, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__set_reload.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};oobb.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 4, oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 5, oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{oobb.evtTools.storage.readNumberFromJSONFile("width_height", "width", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
{
{oobb.evtTools.storage.readNumberFromJSONFile("width_height", "height", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / ((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100) <= oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / ((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / ((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100) > oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.floor((oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))) / 100));
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
{ //Subevents
oobb.Untitled_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = oobb.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{oobb.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}
{ //Subevents
oobb.Untitled_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
oobb.Untitled_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 2, oobb.evtTools.window.getWindowInnerWidth(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "width_height", 3, oobb.evtTools.window.getWindowInnerHeight(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


oobb.Untitled_32sceneCode.eventsList11(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};oobb.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{

{ //Subevents
oobb.Untitled_32sceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDobjObjects2Objects = Hashtable.newFrom({"obj": oobb.Untitled_32sceneCode.GDobjObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects2Objects = Hashtable.newFrom({"start": oobb.Untitled_32sceneCode.GDstartObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDnumberObjects3Objects = Hashtable.newFrom({"number": oobb.Untitled_32sceneCode.GDnumberObjects3});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDnumberObjects4Objects = Hashtable.newFrom({"number": oobb.Untitled_32sceneCode.GDnumberObjects4});
oobb.Untitled_32sceneCode.eventsList14 = function(runtimeScene) {

};oobb.Untitled_32sceneCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects3);
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects3);
{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDnumberObjects3Objects, (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("Point")), (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("Point")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("Point2")) - (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("Point")), (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("Point2")) - (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("Point")), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


const repeatCount4 = 14;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects4);
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects4);

let isConditionTrue_0 = false;
if (true)
{
{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDnumberObjects4Objects, (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(2);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}
}

}


{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects2);
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDnumberObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDnumberObjects2[i].pauseAnimation();
}
}}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDspeedObjects4Objects = Hashtable.newFrom({"speed": oobb.Untitled_32sceneCode.GDspeedObjects4});
oobb.Untitled_32sceneCode.eventsList16 = function(runtimeScene) {

};oobb.Untitled_32sceneCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


const repeatCount4 = 6;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects4);
oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects4);

let isConditionTrue_0 = false;
if (true)
{
{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDspeedObjects4Objects, (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(2);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}
}

}


{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects2);
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDspeedObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDspeedObjects2[i].pauseAnimation();
}
}}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDbarObjects2Objects = Hashtable.newFrom({"bar": oobb.Untitled_32sceneCode.GDbarObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDmonitorObjects2Objects = Hashtable.newFrom({"monitor": oobb.Untitled_32sceneCode.GDmonitorObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDkbObjects2Objects = Hashtable.newFrom({"kb": oobb.Untitled_32sceneCode.GDkbObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDkbObjects2Objects = Hashtable.newFrom({"kb": oobb.Untitled_32sceneCode.GDkbObjects2});
oobb.Untitled_32sceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("bar"), oobb.Untitled_32sceneCode.GDbarObjects2);
oobb.copyArray(runtimeScene.getObjects("kb"), oobb.Untitled_32sceneCode.GDkbObjects2);
oobb.copyArray(runtimeScene.getObjects("monitor"), oobb.Untitled_32sceneCode.GDmonitorObjects2);
oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects2);
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects2);
oobb.copyArray(runtimeScene.getObjects("start"), oobb.Untitled_32sceneCode.GDstartObjects2);
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDobjObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDobjObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDnumberObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDnumberObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstartObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstartObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDbarObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDbarObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDmonitorObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDmonitorObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDkbObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDkbObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDspeedObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDspeedObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDobjObjects2Objects, 0, 0, 0, oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
oobb.copyArray(runtimeScene.getObjects("start"), oobb.Untitled_32sceneCode.GDstartObjects2);
{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("start1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("start1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("start2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("start1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("start2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("start1")), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
}}

}


{


oobb.Untitled_32sceneCode.eventsList15(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList17(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("bar"), oobb.Untitled_32sceneCode.GDbarObjects2);
oobb.copyArray(runtimeScene.getObjects("monitor"), oobb.Untitled_32sceneCode.GDmonitorObjects2);
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDbarObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("b1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("b1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("b2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("b1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("b2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("b1")), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDmonitorObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("moni1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("moni1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("moni2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("moni1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("moni2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("moni1")), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("kb"), oobb.Untitled_32sceneCode.GDkbObjects2);
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDkbObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb1")), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDkbObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb3")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb3")), 1, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb4")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb3")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb4")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb3")), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDkbObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDkbObjects2[i].pauseAnimation();
}
}}

}


{

oobb.copyArray(runtimeScene.getObjects("kb"), oobb.Untitled_32sceneCode.GDkbObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDkbObjects1.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDkbObjects1[i].getVariableNumber(oobb.Untitled_32sceneCode.GDkbObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDkbObjects1[k] = oobb.Untitled_32sceneCode.GDkbObjects1[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDkbObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDkbObjects1 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDkbObjects1.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDkbObjects1[i].setAnimationFrame(1);
}
}}

}


};oobb.Untitled_32sceneCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList18(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDobjObjects2Objects = Hashtable.newFrom({"obj": oobb.Untitled_32sceneCode.GDobjObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects2Objects = Hashtable.newFrom({"start": oobb.Untitled_32sceneCode.GDstartObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDspeedObjects4Objects = Hashtable.newFrom({"speed": oobb.Untitled_32sceneCode.GDspeedObjects4});
oobb.Untitled_32sceneCode.eventsList20 = function(runtimeScene) {

};oobb.Untitled_32sceneCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


const repeatCount4 = 6;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects4);
oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDspeedObjects4.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDspeedObjects4[i].getVariableNumber(oobb.Untitled_32sceneCode.GDspeedObjects4[i].getVariables().getFromIndex(0)) == oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDspeedObjects4[k] = oobb.Untitled_32sceneCode.GDspeedObjects4[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDspeedObjects4.length = k;
if (isConditionTrue_0)
{
{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDspeedObjects4Objects, (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("s" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(2);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDnumberObjects3Objects = Hashtable.newFrom({"number": oobb.Untitled_32sceneCode.GDnumberObjects3});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDnumberObjects4Objects = Hashtable.newFrom({"number": oobb.Untitled_32sceneCode.GDnumberObjects4});
oobb.Untitled_32sceneCode.eventsList22 = function(runtimeScene) {

};oobb.Untitled_32sceneCode.eventsList23 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDnumberObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDnumberObjects3[i].getVariableNumber(oobb.Untitled_32sceneCode.GDnumberObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDnumberObjects3[k] = oobb.Untitled_32sceneCode.GDnumberObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDnumberObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDnumberObjects3 */
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects3);
{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDnumberObjects3Objects, (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("Point")), (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("Point")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("Point2")) - (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("Point")), (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("Point2")) - (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("Point")), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(3);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


const repeatCount4 = 14;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects4);
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDnumberObjects4.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDnumberObjects4[i].getVariableNumber(oobb.Untitled_32sceneCode.GDnumberObjects4[i].getVariables().getFromIndex(0)) == oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDnumberObjects4[k] = oobb.Untitled_32sceneCode.GDnumberObjects4[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDnumberObjects4.length = k;
if (isConditionTrue_0)
{
{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDnumberObjects4Objects, (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1))) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("Point" + oobb.evtTools.common.toString(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))))), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(2);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDbarObjects2Objects = Hashtable.newFrom({"bar": oobb.Untitled_32sceneCode.GDbarObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDmonitorObjects2Objects = Hashtable.newFrom({"monitor": oobb.Untitled_32sceneCode.GDmonitorObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDkbObjects2Objects = Hashtable.newFrom({"kb": oobb.Untitled_32sceneCode.GDkbObjects2});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDkbObjects2Objects = Hashtable.newFrom({"kb": oobb.Untitled_32sceneCode.GDkbObjects2});
oobb.Untitled_32sceneCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
oobb.copyArray(runtimeScene.getObjects("start"), oobb.Untitled_32sceneCode.GDstartObjects2);
{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDobjObjects2Objects, 0, 0, 0, oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), oobb.evtsExt__Array__return.func(runtimeScene, "width_height", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("start1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("start1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("start2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("start1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("start2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("start1")), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


oobb.Untitled_32sceneCode.eventsList21(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList23(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
oobb.copyArray(runtimeScene.getObjects("bar"), oobb.Untitled_32sceneCode.GDbarObjects2);
oobb.copyArray(runtimeScene.getObjects("monitor"), oobb.Untitled_32sceneCode.GDmonitorObjects2);
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDbarObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("b1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("b1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("b2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("b1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("b2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("b1")), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDmonitorObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("moni1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("moni1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("moni2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("moni1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("moni2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("moni1")), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

oobb.copyArray(runtimeScene.getObjects("kb"), oobb.Untitled_32sceneCode.GDkbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDkbObjects2.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDkbObjects2[i].getVariableNumber(oobb.Untitled_32sceneCode.GDkbObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDkbObjects2[k] = oobb.Untitled_32sceneCode.GDkbObjects2[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDkbObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDkbObjects2 */
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDkbObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb1")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb2")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb1")), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

oobb.copyArray(runtimeScene.getObjects("kb"), oobb.Untitled_32sceneCode.GDkbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDkbObjects2.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDkbObjects2[i].getVariableNumber(oobb.Untitled_32sceneCode.GDkbObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDkbObjects2[k] = oobb.Untitled_32sceneCode.GDkbObjects2[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDkbObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDkbObjects2 */
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
{oobb.evtsExt__Array__mise_a_jour_creat_obj.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDkbObjects2Objects, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb3")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb3")), 1, (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb4")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("kb3")), (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb4")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointY("kb3")), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};oobb.Untitled_32sceneCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_reload.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2;
if (isConditionTrue_0) {
{oobb.evtsExt__Array__set_reload.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
oobb.Untitled_32sceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.userFunc0x890680 = function(runtimeScene) {
"use strict";
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;


		



		const ipNumbers = ipAddress.split(".");

		let firstNumber = parseInt(ipNumbers[0]);
		let secondNumber = parseInt(ipNumbers[1]);
		let thirdNumber = parseInt(ipNumbers[2]);
		let fourthNumber = parseInt(ipNumbers[3]);
		runtimeScene.__ip(firstNumber,0);runtimeScene.__ip(secondNumber,3);
		runtimeScene.__ip(thirdNumber,6);runtimeScene.__ip(fourthNumber,9);
		runtimeScene.__ipsetcomplet();
  })
  .catch(error => {
    runtimeScene.getVariables().get("getip").setNumber(1);
  });




  









    
};
oobb.Untitled_32sceneCode.eventsList26 = function(runtimeScene) {

{


oobb.Untitled_32sceneCode.userFunc0x890680(runtimeScene);

}


};oobb.Untitled_32sceneCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(9)) == 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(1);
}
{ //Subevents
oobb.Untitled_32sceneCode.eventsList26(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList28 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDnumberObjects4.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDnumberObjects4[i].getVariableNumber(oobb.Untitled_32sceneCode.GDnumberObjects4[i].getVariables().getFromIndex(0)) == oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDnumberObjects4[k] = oobb.Untitled_32sceneCode.GDnumberObjects4[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDnumberObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDnumberObjects4 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDnumberObjects4.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDnumberObjects4[i].setAnimationFrame(oobb.evtsExt__ip__value.func(runtimeScene, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


};oobb.Untitled_32sceneCode.eventsList29 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDnumberObjects4.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDnumberObjects4[i].getVariableNumber(oobb.Untitled_32sceneCode.GDnumberObjects4[i].getVariables().getFromIndex(0)) == oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDnumberObjects4[k] = oobb.Untitled_32sceneCode.GDnumberObjects4[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDnumberObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDnumberObjects4 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDnumberObjects4.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDnumberObjects4[i].setAnimationFrame(10);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


};oobb.Untitled_32sceneCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.common.mod(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), 3) == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtsExt__ip__value.func(runtimeScene, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (oobb.evtsExt__ip__value.func(runtimeScene, oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.common.mod(oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), 3) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 12);
}
}
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList29(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList31 = function(runtimeScene) {

{

oobb.copyArray(oobb.Untitled_32sceneCode.GDnumberObjects2, oobb.Untitled_32sceneCode.GDnumberObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDnumberObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDnumberObjects3[i].getVariableNumber(oobb.Untitled_32sceneCode.GDnumberObjects3[i].getVariables().getFromIndex(0)) == oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDnumberObjects3[k] = oobb.Untitled_32sceneCode.GDnumberObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDnumberObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDnumberObjects3 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDnumberObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDnumberObjects3[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


};oobb.Untitled_32sceneCode.eventsList32 = function(runtimeScene) {

{


const repeatCount3 = 12;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
oobb.Untitled_32sceneCode.eventsList30(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let stopDoWhile_0 = false;
do {
oobb.copyArray(runtimeScene.getObjects("number"), oobb.Untitled_32sceneCode.GDnumberObjects2);
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < 15);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDnumberObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDnumberObjects2[i].setX(oobb.Untitled_32sceneCode.GDnumberObjects2[i].getX() + (((( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("Point3")) - (( oobb.Untitled_32sceneCode.GDobjObjects2.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects2[0].getPointX("Point"))) / 2));
}
}
{ //Subevents: 
oobb.Untitled_32sceneCode.eventsList31(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};oobb.Untitled_32sceneCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10109300);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
oobb.Untitled_32sceneCode.eventsList32(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__ip__complete.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList33(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{oobb.evtsExt__Array__set_mouse.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};oobb.Untitled_32sceneCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(oobb.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
{oobb.evtsExt__Array__set_mouse.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects4Objects = Hashtable.newFrom({"start": oobb.Untitled_32sceneCode.GDstartObjects4});
oobb.Untitled_32sceneCode.eventsList37 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("start"), oobb.Untitled_32sceneCode.GDstartObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.input.cursorOnObject(oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDstartObjects4 */
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstartObjects4.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstartObjects4[i].setVariableBoolean(oobb.Untitled_32sceneCode.GDstartObjects4[i].getVariables().getFromIndex(1), true);
}
}}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstopObjects3Objects = Hashtable.newFrom({"stop": oobb.Untitled_32sceneCode.GDstopObjects3});
oobb.Untitled_32sceneCode.eventsList38 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("stop"), oobb.Untitled_32sceneCode.GDstopObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.input.cursorOnObject(oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstopObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDstopObjects3 */
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstopObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstopObjects3[i].setVariableBoolean(oobb.Untitled_32sceneCode.GDstopObjects3[i].getVariables().getFromIndex(1), true);
}
}}

}


};oobb.Untitled_32sceneCode.eventsList39 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList37(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList38(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList40 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_layer.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList39(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_layer.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == -(1);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList40(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_nlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList41(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList43 = function(runtimeScene) {

{


oobb.Untitled_32sceneCode.eventsList42(runtimeScene);
}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects5Objects = Hashtable.newFrom({"start": oobb.Untitled_32sceneCode.GDstartObjects5});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstopObjects4Objects = Hashtable.newFrom({"stop": oobb.Untitled_32sceneCode.GDstopObjects4});
oobb.Untitled_32sceneCode.eventsList44 = function(runtimeScene) {

{

oobb.copyArray(oobb.Untitled_32sceneCode.GDstartObjects4, oobb.Untitled_32sceneCode.GDstartObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.input.cursorOnObject(oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects5Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDstartObjects5 */
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstartObjects5.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstartObjects5[i].setVariableBoolean(oobb.Untitled_32sceneCode.GDstartObjects5[i].getVariables().getFromIndex(1), false);
}
}{oobb.evtsExt__Array__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects4);
/* Reuse oobb.Untitled_32sceneCode.GDstartObjects4 */
oobb.copyArray(runtimeScene.getObjects("stop"), oobb.Untitled_32sceneCode.GDstopObjects4);
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstartObjects4.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstartObjects4[i].setVariableBoolean(oobb.Untitled_32sceneCode.GDstartObjects4[i].getVariables().getFromIndex(1), false);
}
}{oobb.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), true);
}{oobb.evtsExt__check1__check1.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstartObjects4.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstartObjects4[i].deleteFromScene(runtimeScene);
}
}{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstopObjects4Objects, (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("start1")), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("start1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("start2")) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointX("start1")), (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("start2")) - (( oobb.Untitled_32sceneCode.GDobjObjects4.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects4[0].getPointY("start1")), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), false);
}{oobb.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
}}

}


};oobb.Untitled_32sceneCode.eventsList45 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("start"), oobb.Untitled_32sceneCode.GDstartObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDstartObjects4.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDstartObjects4[i].getVariableBoolean(oobb.Untitled_32sceneCode.GDstartObjects4[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDstartObjects4[k] = oobb.Untitled_32sceneCode.GDstartObjects4[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDstartObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList44(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstopObjects4Objects = Hashtable.newFrom({"stop": oobb.Untitled_32sceneCode.GDstopObjects4});
oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects3Objects = Hashtable.newFrom({"start": oobb.Untitled_32sceneCode.GDstartObjects3});
oobb.Untitled_32sceneCode.eventsList46 = function(runtimeScene) {

{

oobb.copyArray(oobb.Untitled_32sceneCode.GDstopObjects3, oobb.Untitled_32sceneCode.GDstopObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.input.cursorOnObject(oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstopObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
oobb.copyArray(runtimeScene.getObjects("start"), oobb.Untitled_32sceneCode.GDstartObjects4);
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstartObjects4.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstartObjects4[i].setVariableBoolean(oobb.Untitled_32sceneCode.GDstartObjects4[i].getVariables().getFromIndex(1), false);
}
}{oobb.evtsExt__Array__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
oobb.copyArray(runtimeScene.getObjects("obj"), oobb.Untitled_32sceneCode.GDobjObjects3);
oobb.copyArray(runtimeScene.getObjects("start"), oobb.Untitled_32sceneCode.GDstartObjects3);
/* Reuse oobb.Untitled_32sceneCode.GDstopObjects3 */
{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstopObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstopObjects3[i].setVariableBoolean(oobb.Untitled_32sceneCode.GDstopObjects3[i].getVariables().getFromIndex(1), false);
}
}{oobb.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), false);
}{oobb.evtsExt__check1__setstiop.func(runtimeScene, 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDstopObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDstopObjects3[i].deleteFromScene(runtimeScene);
}
}{oobb.evtsExt__Array__creat_obj_plus_layer.func(runtimeScene, oobb.Untitled_32sceneCode.mapOfGDoobb_46Untitled_9532sceneCode_46GDstartObjects3Objects, (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("start1")), (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("start1")), 0, (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("start2")) - (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointX("start1")), (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("start2")) - (( oobb.Untitled_32sceneCode.GDobjObjects3.length === 0 ) ? 0 :oobb.Untitled_32sceneCode.GDobjObjects3[0].getPointY("start1")), "", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
}{oobb.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), false);
}}

}


};oobb.Untitled_32sceneCode.eventsList47 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("stop"), oobb.Untitled_32sceneCode.GDstopObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDstopObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDstopObjects3[i].getVariableBoolean(oobb.Untitled_32sceneCode.GDstopObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDstopObjects3[k] = oobb.Untitled_32sceneCode.GDstopObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDstopObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList46(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList48 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(5), true);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList45(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8), true);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList47(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList49 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_layer.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList48(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList50 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_layer.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == -(1);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList49(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList51 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_nlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList50(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList52 = function(runtimeScene) {

{


oobb.Untitled_32sceneCode.eventsList51(runtimeScene);
}


};oobb.Untitled_32sceneCode.eventsList53 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtsExt__Array__return.func(runtimeScene, "good", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
}
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList43(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtsExt__Array__return.func(runtimeScene, "good", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList52(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if (isConditionTrue_0) {
{oobb.evtsExt__Array__set_mouse.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};oobb.Untitled_32sceneCode.eventsList54 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
oobb.Untitled_32sceneCode.eventsList53(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};oobb.Untitled_32sceneCode.eventsList55 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList36(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = oobb.evtsExt__Array__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList54(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList56 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("kb"), oobb.Untitled_32sceneCode.GDkbObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDkbObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDkbObjects3[i].getVariableNumber(oobb.Untitled_32sceneCode.GDkbObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDkbObjects3[k] = oobb.Untitled_32sceneCode.GDkbObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDkbObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDkbObjects3 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDkbObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDkbObjects3[i].setAnimationFrame(oobb.evtsExt__Array__return.func(runtimeScene, "kb", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{oobb.evtsExt__Array__InsertAt.func(runtimeScene, "kb", 1, oobb.evtsExt__Array__return.func(runtimeScene, "kb", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};oobb.Untitled_32sceneCode.eventsList57 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (oobb.evtsExt__Array__return.func(runtimeScene, "kb", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != oobb.evtsExt__Array__return.func(runtimeScene, "kb", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList56(runtimeScene);} //End of subevents
}

}


{

oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDspeedObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariableNumber(oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDspeedObjects3[k] = oobb.Untitled_32sceneCode.GDspeedObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDspeedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDspeedObjects3 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDspeedObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDspeedObjects3[i].setAnimationFrame(oobb.evtsExt__check1__s1.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDspeedObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariableNumber(oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDspeedObjects3[k] = oobb.Untitled_32sceneCode.GDspeedObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDspeedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDspeedObjects3 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDspeedObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDspeedObjects3[i].setAnimationFrame(oobb.evtsExt__check1__s2.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDspeedObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariableNumber(oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDspeedObjects3[k] = oobb.Untitled_32sceneCode.GDspeedObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDspeedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDspeedObjects3 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDspeedObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDspeedObjects3[i].setAnimationFrame(oobb.evtsExt__check1__s3.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDspeedObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariableNumber(oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDspeedObjects3[k] = oobb.Untitled_32sceneCode.GDspeedObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDspeedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDspeedObjects3 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDspeedObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDspeedObjects3[i].setAnimationFrame(oobb.evtsExt__check1__s4.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDspeedObjects3.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariableNumber(oobb.Untitled_32sceneCode.GDspeedObjects3[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDspeedObjects3[k] = oobb.Untitled_32sceneCode.GDspeedObjects3[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDspeedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDspeedObjects3 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDspeedObjects3.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDspeedObjects3[i].setAnimationFrame(oobb.evtsExt__check1__s5.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

oobb.copyArray(runtimeScene.getObjects("speed"), oobb.Untitled_32sceneCode.GDspeedObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDspeedObjects2.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDspeedObjects2[i].getVariableNumber(oobb.Untitled_32sceneCode.GDspeedObjects2[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDspeedObjects2[k] = oobb.Untitled_32sceneCode.GDspeedObjects2[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDspeedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDspeedObjects2 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDspeedObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDspeedObjects2[i].setAnimationFrame(oobb.evtsExt__check1__s6.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};oobb.Untitled_32sceneCode.eventsList58 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "stado") > 0.1;
if (isConditionTrue_0) {
{oobb.evtsExt__check1__value.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{oobb.evtTools.runtimeScene.resetTimer(runtimeScene, "stado");
}
{ //Subevents
oobb.Untitled_32sceneCode.eventsList57(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList59 = function(runtimeScene) {

{


oobb.Untitled_32sceneCode.eventsList58(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};oobb.Untitled_32sceneCode.eventsList60 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0);
}{oobb.evtsExt__check1__check1.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
oobb.Untitled_32sceneCode.eventsList59(runtimeScene);} //End of subevents
}

}


};oobb.Untitled_32sceneCode.eventsList61 = function(runtimeScene) {

{

oobb.copyArray(runtimeScene.getObjects("monitor"), oobb.Untitled_32sceneCode.GDmonitorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDmonitorObjects2.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDmonitorObjects2[i].getVariableNumber(oobb.Untitled_32sceneCode.GDmonitorObjects2[i].getVariables().getFromIndex(1)) == 2 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDmonitorObjects2[k] = oobb.Untitled_32sceneCode.GDmonitorObjects2[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDmonitorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDmonitorObjects2 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDmonitorObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDmonitorObjects2[i].getBehavior("SpriteRecolorizer").ResetColor((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDmonitorObjects2.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDmonitorObjects2[i].returnVariable(oobb.Untitled_32sceneCode.GDmonitorObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{oobb.evtTools.runtimeScene.resetTimer(runtimeScene, "clear");
}}

}


{

oobb.copyArray(runtimeScene.getObjects("monitor"), oobb.Untitled_32sceneCode.GDmonitorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = oobb.Untitled_32sceneCode.GDmonitorObjects1.length;i<l;++i) {
    if ( oobb.Untitled_32sceneCode.GDmonitorObjects1[i].getVariableNumber(oobb.Untitled_32sceneCode.GDmonitorObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        oobb.Untitled_32sceneCode.GDmonitorObjects1[k] = oobb.Untitled_32sceneCode.GDmonitorObjects1[i];
        ++k;
    }
}
oobb.Untitled_32sceneCode.GDmonitorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse oobb.Untitled_32sceneCode.GDmonitorObjects1 */
{for(var i = 0, len = oobb.Untitled_32sceneCode.GDmonitorObjects1.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDmonitorObjects1[i].returnVariable(oobb.Untitled_32sceneCode.GDmonitorObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDmonitorObjects1.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDmonitorObjects1[i].returnVariable(oobb.Untitled_32sceneCode.GDmonitorObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = oobb.Untitled_32sceneCode.GDmonitorObjects1.length ;i < len;++i) {
    oobb.Untitled_32sceneCode.GDmonitorObjects1[i].getBehavior("SpriteRecolorizer").Recolorize("255;0;0", "255;0;0", oobb.randomInRange(0, 180), oobb.randomInRange(0, 100), oobb.randomInRange(0, 100), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};oobb.Untitled_32sceneCode.eventsList62 = function(runtimeScene) {

{


oobb.Untitled_32sceneCode.eventsList5(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList13(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList19(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList25(runtimeScene);
}


{


oobb.Untitled_32sceneCode.eventsList27(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


oobb.Untitled_32sceneCode.eventsList34(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


oobb.Untitled_32sceneCode.eventsList55(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6), true);
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList60(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = oobb.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clear") > 0.2;
if (isConditionTrue_0) {

{ //Subevents
oobb.Untitled_32sceneCode.eventsList61(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

oobb.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

oobb.Untitled_32sceneCode.GDobjObjects1.length = 0;
oobb.Untitled_32sceneCode.GDobjObjects2.length = 0;
oobb.Untitled_32sceneCode.GDobjObjects3.length = 0;
oobb.Untitled_32sceneCode.GDobjObjects4.length = 0;
oobb.Untitled_32sceneCode.GDobjObjects5.length = 0;
oobb.Untitled_32sceneCode.GDobjObjects6.length = 0;
oobb.Untitled_32sceneCode.GDnumberObjects1.length = 0;
oobb.Untitled_32sceneCode.GDnumberObjects2.length = 0;
oobb.Untitled_32sceneCode.GDnumberObjects3.length = 0;
oobb.Untitled_32sceneCode.GDnumberObjects4.length = 0;
oobb.Untitled_32sceneCode.GDnumberObjects5.length = 0;
oobb.Untitled_32sceneCode.GDnumberObjects6.length = 0;
oobb.Untitled_32sceneCode.GDobjaObjects1.length = 0;
oobb.Untitled_32sceneCode.GDobjaObjects2.length = 0;
oobb.Untitled_32sceneCode.GDobjaObjects3.length = 0;
oobb.Untitled_32sceneCode.GDobjaObjects4.length = 0;
oobb.Untitled_32sceneCode.GDobjaObjects5.length = 0;
oobb.Untitled_32sceneCode.GDobjaObjects6.length = 0;
oobb.Untitled_32sceneCode.GDstartObjects1.length = 0;
oobb.Untitled_32sceneCode.GDstartObjects2.length = 0;
oobb.Untitled_32sceneCode.GDstartObjects3.length = 0;
oobb.Untitled_32sceneCode.GDstartObjects4.length = 0;
oobb.Untitled_32sceneCode.GDstartObjects5.length = 0;
oobb.Untitled_32sceneCode.GDstartObjects6.length = 0;
oobb.Untitled_32sceneCode.GDspeedObjects1.length = 0;
oobb.Untitled_32sceneCode.GDspeedObjects2.length = 0;
oobb.Untitled_32sceneCode.GDspeedObjects3.length = 0;
oobb.Untitled_32sceneCode.GDspeedObjects4.length = 0;
oobb.Untitled_32sceneCode.GDspeedObjects5.length = 0;
oobb.Untitled_32sceneCode.GDspeedObjects6.length = 0;
oobb.Untitled_32sceneCode.GDmonitorObjects1.length = 0;
oobb.Untitled_32sceneCode.GDmonitorObjects2.length = 0;
oobb.Untitled_32sceneCode.GDmonitorObjects3.length = 0;
oobb.Untitled_32sceneCode.GDmonitorObjects4.length = 0;
oobb.Untitled_32sceneCode.GDmonitorObjects5.length = 0;
oobb.Untitled_32sceneCode.GDmonitorObjects6.length = 0;
oobb.Untitled_32sceneCode.GDbarObjects1.length = 0;
oobb.Untitled_32sceneCode.GDbarObjects2.length = 0;
oobb.Untitled_32sceneCode.GDbarObjects3.length = 0;
oobb.Untitled_32sceneCode.GDbarObjects4.length = 0;
oobb.Untitled_32sceneCode.GDbarObjects5.length = 0;
oobb.Untitled_32sceneCode.GDbarObjects6.length = 0;
oobb.Untitled_32sceneCode.GDstopObjects1.length = 0;
oobb.Untitled_32sceneCode.GDstopObjects2.length = 0;
oobb.Untitled_32sceneCode.GDstopObjects3.length = 0;
oobb.Untitled_32sceneCode.GDstopObjects4.length = 0;
oobb.Untitled_32sceneCode.GDstopObjects5.length = 0;
oobb.Untitled_32sceneCode.GDstopObjects6.length = 0;
oobb.Untitled_32sceneCode.GDkbObjects1.length = 0;
oobb.Untitled_32sceneCode.GDkbObjects2.length = 0;
oobb.Untitled_32sceneCode.GDkbObjects3.length = 0;
oobb.Untitled_32sceneCode.GDkbObjects4.length = 0;
oobb.Untitled_32sceneCode.GDkbObjects5.length = 0;
oobb.Untitled_32sceneCode.GDkbObjects6.length = 0;

oobb.Untitled_32sceneCode.eventsList62(runtimeScene);

return;

}

oobb['Untitled_32sceneCode'] = oobb.Untitled_32sceneCode;
