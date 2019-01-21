from django.shortcuts import render, render_to_response
#from __future__ import unicode_literals
from django.template.loader import get_template
from django.db import models
from django.http import HttpResponse
from .models import *

from django.views.generic import ListView
from django.core.urlresolvers import reverse_lazy
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
def home(request):
	#cursos_it=Cursos.objects.all()
    #context = {'cursos_it':cursos_it}


    #model = Cursos
    #template_name = 'index.html'
    #if request.method == 'POST':
    #    message = request.POST['message']
    #    nombre = request.POST['nombre']
    #    correo = request.POST['correo']
	#send_mail('MENSAJE DE ITLEARNING',"Nombre:  "+nombre+"\ncorreo:  "+correo+"\nMensaje:  "+message,settings.EMAIL_HOST_USER,['osiel781@gmail.com'], fail_silently=False)
	return render_to_response('index.html')