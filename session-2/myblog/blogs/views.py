from django.shortcuts import render
from rest_framework import serializers, viewsets, permissions
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Blog
        fields = '__all__'
    
    def create(self, validated_data):
        request = self.context['request']
        user = getattr(request, 'user', None)
        if not user.is_authenticated:
            raise serializers.ValidationError('Only authenticated users are allowed to create blogs.')
        validated_data['author'] = user
        return Blog.objects.create(**validated_data)


class AuthorPermission(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [AuthorPermission, ]
