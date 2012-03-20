
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

def  makeMaterial(name,  diffuse,  specular,  alpha):
    mat  =  bpy.data.materials.new(name)
    mat.diffuse_color  =  diffuse
    mat.diffuse_shader = 'LAMBERT'
    mat.diffuse_intensity  =  1.0
    mat.specular_color  =  specular
    mat.specular_shader  = 'COOKTORR'
    mat.specular_intensity  =  0.5
    mat.alpha  =  alpha
    mat.ambient  =  1
    return  mat

def  setMaterial(ob,  mat):
    me  =  ob.data
    me.materials.append(mat)
    
red  =  makeMaterial('Red', (1, 0, 0),  (1, 1, 1),  1)
blue  =  makeMaterial('BlueSemi', (0, 0, 1), (1, 1, 1), 0.5)
green  =  makeMaterial('GreenSemi', (0, 1, 0), (1, 1, 1), 0.5)
yellow  =  makeMaterial('YellowSemi', (1, 1, 0), (1, 1, 1), 0.5)

# Create and name TextCurve object #1
bpy.ops.object.text_add(
location=(0, 4, 0),
rotation=(0,0,0))
ob = bpy.context.object
ob.name = 'Text1'
# TextCurve attributes
ob.data.name = 'TextData1'
ob.data.body = "Line 1"
ob.data.font = fnt
ob.data.size = 3
# Inherited Curve attributes
ob.data.extrude = 0.2
setMaterial(ob, red)

bpy.ops.object.convert(target='MESH', keep_original=False)

# Create and name TextCurve object #2
bpy.ops.object.text_add(
location=(0, 2, 0),
rotation=(0,0,0))
ob = bpy.context.object
ob.name = 'Text2'
# TextCurve attributes
ob.data.name = 'TextData2'
ob.data.body = "Line 2"
ob.data.font = fnt
ob.data.size = 3
# Inherited Curve attributes
ob.data.extrude = 0.2
setMaterial(ob, green)

bpy.ops.object.convert(target='MESH', keep_original=False)

# Create and name TextCurve object #3
bpy.ops.object.text_add(
location=(0, 0.1, 0),
rotation=(0,0,0))
ob = bpy.context.object
ob.name = 'Text3'
# TextCurve attributes
ob.data.body = "Line 3"
ob.data.name = 'TextData3'
ob.data.font = fnt
ob.data.size = 3
# Inherited Curve attributes
ob.data.extrude = 0.2
setMaterial(ob, yellow)

bpy.ops.object.convert(target='MESH', keep_original=False)


bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.uv.smart_project()
bpy.ops.object.mode_set(mode='OBJECT')
 
