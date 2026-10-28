from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

root=Path(__file__).parent
canvas=Image.new('RGB',(1080,440),'#f7f8fa')
d=ImageDraw.Draw(canvas)
font_path='C:/Windows/Fonts/arial.ttf'
bold_path='C:/Windows/Fonts/arialbd.ttf'
title=ImageFont.truetype(bold_path,27)
label=ImageFont.truetype(bold_path,19)
small=ImageFont.truetype(font_path,16)
d.text((26,18),'AM receiver — actual Tinkercad scope captures',font=title,fill='#18283b')
panels=[('scopeRF','AM input','100 kHz carrier; 500 Hz message'),('scopeDet','Detector output','Recovered envelope'),('scopeAudio','8 ohm load output','Small audio voltage, shown in mV')]
for i,(name,heading,caption) in enumerate(panels):
    x=26+i*352
    d.text((x,67),heading,font=label,fill='#18283b')
    im=Image.open(root/(name+'-simulation.png')).convert('RGB')
    im.thumbnail((300,290),Image.Resampling.LANCZOS)
    if im.width<280:
        scale=280/im.width
        im=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.NEAREST)
    canvas.paste(im,(x+16,100))
    d.text((x,400),caption,font=small,fill='#42566b')
canvas.save(root/'waveform-demonstration.png')
