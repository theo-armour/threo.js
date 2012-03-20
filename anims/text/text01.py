
import bpy
import math
from math import pi

def removeObjects( scn ):
    for ob in scn.objects:
        if ob.type == 'FONT':
            scn.objects.unlink( ob )
 
scn = bpy.context.scene
removeObjects( scn )

# Create and name TextCurve object
bpy.ops.object.text_add(
location=(0, 0, 0),
#rotation=(pi/2,0,pi))
rotation=(0,0,0))
ob = bpy.context.object
ob.name = 'HelloWorldText'
tcu = ob.data
tcu.name = 'HelloWorldData'

# TextCurve attributes
tcu.body = "Hello, world"
tcu.font = bpy.data.fonts[0]
#tcu.offset_x = -9
#tcu.offset_y = -0.25
#tcu.shear = 0.5
tcu.size = 3
#tcu.space_character = 2
#tcu.space_word = 4

# Inherited Curve attributes
tcu.extrude = 0.2
#tcu.use_fill_back = True
#tcu.use_fill_deform = True
#tcu.use_fill_front = True