
from django.urls import path

from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('register/',views.register,name='register'),
    path('login/', views.login, name='login'),
    path('booking/', views.booking, name='booking'),
    path('confirm/', views.confirm, name='confirm'),
    path('direct/', views.direct, name='direct'),

]
