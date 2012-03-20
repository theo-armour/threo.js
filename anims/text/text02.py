
import bpy
import math
from math import pi

def removeObjects( scn ):
    for ob in scn.objects:
        if (ob.type == 'FONT') or (ob.type == 'MESH'):
            scn.objects.unlink( ob )
 
scn = bpy.context.scene
removeObjects( scn )

# Create and name TextCurve object
bpy.ops.object.text_add(
location=(0, 0, 0),
rotation=(0,0,0))
ob = bpy.context.object
ob.name = 'HelloWorldText'
tcu = ob.data
tcu.name = 'HelloWorldData'

# TextCurve attributes
tcu.body = "Howdy"
fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\Impact.ttf')
tcu.font = fnt
tcu.size = 3
# Inherited Curve attributes
tcu.extrude = 0.2

bpy.ops.object.convert(target='MESH', keep_original=False)

bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.uv.smart_project()
bpy.ops.object.mode_set(mode='OBJECT')
 

