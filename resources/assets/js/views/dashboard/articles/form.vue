<template>
    <el-form ref="form" status-icon :model="form" label-width="120px">
        <el-form-item label="所属分类" prop="category_id">
            <el-select v-model="form.category_id" placeholder="请选择所属分类">
                <el-option v-for="(category, key) in allCategory" :key="key" :label="category.name" :value="category.id"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="文章标题" prop="title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="封面显示图标" prop="icon">
            <el-input v-model="form.icon"></el-input>
        </el-form-item>

        <el-form-item label="封面图片" prop="image">
            <el-upload
                    class="upload-demo"
                    name="image"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>

        <el-form-item label="文章内容" prop="description">
            <template>
                <markdown-editor v-model="form.content" ref="markdownEditor"></markdown-editor>
            </template>
        </el-form-item>

        <el-form-item label="标签" prop="description">
            <multiselect
                    v-model="tags"
                    :options="allTags"
                    :multiple="true"
                    :searchable="true"
                    :hide-selected="true"
                    :close-on-select="false"
                    :clear-on-select="false"
                    label="tag"
                    track-by="tag">
            </multiselect>
        </el-form-item>

        <el-form-item label="文章描述">
            <el-input type="textarea" v-model="form.meta_description"></el-input>
        </el-form-item>

        <el-form-item label="发布时间">
            <el-date-picker
                    v-model="form.published_at"
                    type="datetime"
                    placeholder="选择日期时间"
                    align="right"
                    :picker-options="pickerOptions1">
            </el-date-picker>
        </el-form-item>

        <el-form-item>
            <el-button type="primary">发布文章</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import markdownEditor from 'vue-simplemde/src/markdown-editor'
    import Multiselect from 'vue-multiselect'

    export default {
        components: {
            markdownEditor,
            Multiselect
        },
        created() {
            Promise.all([this.$http.get('category?type=all'), this.$http.get('tags?type=all')]).then((response) => {
                this.allCategory = response[0].data;
                this.allTags = response[1].data
            })
        },
        data() {
           return {
               tags: null,
               allCategory: [],
               allTags: [],
               form: {},
               pickerOptions1: {
                   shortcuts: [{
                       text: '今天',
                       onClick(picker) {
                           picker.$emit('pick', new Date());
                       }
                   }, {
                       text: '昨天',
                       onClick(picker) {
                           const date = new Date();
                           date.setTime(date.getTime() - 3600 * 1000 * 24);
                           picker.$emit('pick', date);
                       }
                   }, {
                       text: '一周前',
                       onClick(picker) {
                           const date = new Date();
                           date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                           picker.$emit('pick', date);
                       }
                   }]
               },
           }

        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    @import '~simplemde/dist/simplemde.min.css';

    .el-select{
        display:block;
    }
</style>