from django.db import models

# Create your models here.

class Cursos(models.Model):
    id = models.AutoField(primary_key= True)
    nombre_curso = models.CharField(max_length=200)
    nombre_certificadora = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=200, default='')
    fecha_curso = models.DateField()
    precio = models.IntegerField()
    objects = models.Manager()

    class  Meta:
        verbose_name_plural = "Cursos"
    def __str__(self):
        return self.nombre_curso