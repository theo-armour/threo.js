
import bpy
import math
from math import pi

def removeObjects( scn ):
    for ob in scn.objects:
        if (ob.type == 'FONT') or (ob.type == 'MESH'):
            scn.objects.unlink( ob )
 
scn = bpy.context.scene
removeObjects( scn )

fnt = bpy.data.fonts.load('C:\\Windows\\Fonts\\Impact.ttf')

# Create and name TextCurve object
bpy.ops.object.text_add(
location=(0, 0, 0),
rotation=(0,0,0))
ob = bpy.context.object
ob.name = 'Text1'
# TextCurve attributes
ob.data.body = "Howdy"
ob.data.font = fnt
ob.data.size = 3
# Inherited Curve attributes
ob.data.extrude = 0.2

bpy.ops.object.convert(target='MESH', keep_original=False)

bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.uv.smart_project()
bpy.ops.object.mode_set(mode='OBJECT')
 
