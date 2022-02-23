from django.contrib import admin
from django.utils.translation import ugettext_lazy
# Register your models here.
from .models import  Building

admin.site.site_header = 'Quake Structural Integrity System Backend'
# admin.site.site_title = ugettext_lazy('QSIS 後臺')
admin.site.index_title = 'QSIS'

@admin.register(Building)
class BuildingAdmin(admin.ModelAdmin):
    list_display =[f.name for f in Building._meta.fields]
