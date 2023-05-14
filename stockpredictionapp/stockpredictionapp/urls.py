"""
URL configuration for stockpredictionapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

from stockapp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='stockapp'),
    path('search/', search),
    path('ticker/', ticker),
    path('search-ticker', csrf_exempt(search_ticker)),
    path('predict/<str:ticker_value>/<str:number_of_days>/', predict),
    path('authentication/', include('authentication.urls'))
]
